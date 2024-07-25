import { useState, useEffect, useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Components
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem'

// Helpers
import findProductsToShow from '../../helpers/findProductsToShow'
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './shopping-cart-items-container.css'

export default function ShoppingCartItemsContainer({ context }) {
    const { shoppingCartItems, totalOrderPrice } = useContext(ShoppingCartContext)
    const [productsToShow, setProductsToShow] = useState([])

    // Get shopping cart contents
    useEffect(() => {
        setProductsToShow(findProductsToShow(shoppingCartItems))
    }, [shoppingCartItems])

    return (
        <section className='shopping-cart-overview'>
            {/* Items in shopping cart */}
            <div>
                {
                    productsToShow.map((product) => {
                        return <ShoppingCartItem
                            key={product[0]}
                            context={context}
                            product={product}
                        />
                    })
                }
            </div>
            {/* Order total */}
            <div className="shopping-cart-order-total">
                <p className='paragraph-6'>
                    Order Total
                </p>
                <p className='paragraph-7'>
                    {convertToCurrency(totalOrderPrice)}
                </p>
            </div>
        </section>
    )
}