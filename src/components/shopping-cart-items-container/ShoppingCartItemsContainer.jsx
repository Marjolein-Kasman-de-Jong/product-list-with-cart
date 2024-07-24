import { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem'
import ShoppingCartOrderTotal from '../shopping-cart-order-total/ShoppingCartOrderTotal'
import findProductsToShow from '../../helpers/findProductsToShow'
import './shopping-cart-items-container.css'

export default function ShoppingCartItemsContainer({ context, buttonIsSelected, setButtonIsSelected }) {
    const { shoppingCartItems, singleItemPrices, totalItemPrices } = useContext(ShoppingCartContext)
    const [productsToShow, setProductsToShow] = useState([])

    useEffect(() => {
        setProductsToShow(findProductsToShow(shoppingCartItems))
    }, [shoppingCartItems])

    return (
        <div className={`${context} shopping-cart-items-container`}>
            {
                productsToShow.map((product) => {
                    return <ShoppingCartItem
                        key={product[0]}
                        context={context}
                        item={product[0]}
                        amount={product[1]}
                        singleItemPrice={singleItemPrices[product[0]]}
                        totalItemPrice={totalItemPrices[product[0]]}
                        buttonIsSelected={buttonIsSelected} 
                        setButtonIsSelected={setButtonIsSelected}
                    />
                })
            }
            <ShoppingCartOrderTotal />
        </div>
    )
}