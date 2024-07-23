import { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem'
import findProductsToShow from '../../helpers/findProductsToShow'
import './shopping-cart-items-container.css'

export default function ShoppingCartItemsContainer() {
    const { shoppingCartItems, singleItemPrices, totalItemPrices } = useContext(ShoppingCartContext)
    const [productsToShow, setProductsToShow] = useState([])

    useEffect(() => {
        setProductsToShow(findProductsToShow(shoppingCartItems))
    }, [shoppingCartItems])

    return (
        <div className="shopping-cart-items-container">
            {
                productsToShow.map((product) => {
                    return <ShoppingCartItem
                        key={product[0]}
                        item={product[0]}
                        amount={product[1]}
                        singleItemPrice={singleItemPrices[product[0]]}
                        totalItemPrice={totalItemPrices[product[0]]}
                    />
                })
            }
        </div>
    )
}