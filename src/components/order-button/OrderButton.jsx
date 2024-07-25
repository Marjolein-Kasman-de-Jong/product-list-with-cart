import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AddToCartButtonContext } from '../../context/AddToCartButtonContext'

// Styles
import './order-button.css'

export default function OrderButton({ context, setIsOpen, onClick }) {
    const { initializeShoppingCart } = useContext(ShoppingCartContext)
    const { initializeIsActive } = useContext(AddToCartButtonContext)

    // Handle order button click
    function handleClick() {
        if (context === 'cart') {
            setIsOpen(true)
        } else {
            initializeShoppingCart()
            initializeIsActive()
            onClick()
        }
    }

    return (
        <button
            className={`order-button ${context} button-2`}
            onClick={handleClick}
        >
            {
                context === 'cart' ? 'Confirm Order' : 'Start New Order'
            }
        </button>
    )
}