import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AddToCartButtonContext } from '../../context/AddToCartButtonContext'

// Helpers
import convertToCurrency from '../../helpers/convertToCurrency'
import getThumbnailByName from '../../helpers/getThumbnailByName'

// Constants
import data from '../../constants/data'

// Styles
import './shopping-cart-item.css'

export default function ShoppingCartItem({ context, product }) {
    const { singleItemPrices, totalItemPrices, updateShoppingCart } = useContext(ShoppingCartContext)
    const { updateIsActive } = useContext(AddToCartButtonContext)
    
    const [productName, amount] = product

    const singleItemPrice = singleItemPrices[productName]
    const totalItemPrice = totalItemPrices[productName]
    
    // Handle remove item from shopping cart button click
    function handleClick() {
        updateShoppingCart(productName, 0)
        updateIsActive(productName, false)
    }

    return (
        <article className='shopping-cart-item'>
            {/* Item thumbnail */}
            {
                context === 'order-confirmation' && 
                    <img 
                        src={getThumbnailByName(data, productName)} 
                        alt={productName} 
                    />
            }
            {/* Item summary */}
            <div className='item-summary'>
                {/* Product title */}
                <header>
                    <h3 className='heading-4'>
                        {productName}
                    </h3>
                </header>
                {/* Price calculation */}
                <div className='price-calculation'>
                    {/* Amount of items */}
                    <p className='paragraph-5'>
                        {`${amount}x`}
                    </p>
                    {/* Price per unit */}
                    <p className='paragraph-1'>
                        {convertToCurrency(singleItemPrice)}
                    </p>
                    {/* Total price for this item (in shopping cart) */}
                    {
                        context === 'shopping-cart' ?
                            <p className='paragraph-3'>
                                {convertToCurrency(totalItemPrice)}
                            </p>
                            :
                            null
                    }
                </div>
            </div>
            {
                context === 'shopping-cart' ?
                    // Remove item from shopping cart button
                    <button
                        className='remove-item-button'
                        onClick={handleClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            fill="none"
                            viewBox="0 0 10 10"
                        >
                            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                        </svg>
                    </button>
                    :
                    // Total price for this item (in order confirmation modal)
                    <p className='paragraph-4'>
                        {convertToCurrency(totalItemPrice)}
                    </p>
            }
        </article>
    )
}