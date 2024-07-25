import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AddToCartButtonContext } from '../../context/AddToCartButtonContext'

// Styles
import './change-quantity-button.css'

export default function ChangeQuantityButton({ type, name }) {
    const { shoppingCartItems, updateShoppingCart } = useContext(ShoppingCartContext)
    const { updateIsActive } = useContext(AddToCartButtonContext)

    // Handle change quantity button click
    function handleClick() {
        const change = type === 'increment' ? 1 : -1
        
        if (change === -1 && shoppingCartItems[name] === 1) {
                updateIsActive(name, false)
        }

        updateShoppingCart(name, shoppingCartItems[name] + change)
    }

    // Handle keydown event
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleClick()
        }
    }

    return (
        <div 
            className='change-quantity-button' 
            onClick={() => handleClick()}
            onKeyDown={handleKeyDown}
            tabIndex='0'
        >
            <img 
                src={`src/assets/images/icon-${type}-quantity.svg`} 
                alt={type} 
            />
        </div>
    )
}