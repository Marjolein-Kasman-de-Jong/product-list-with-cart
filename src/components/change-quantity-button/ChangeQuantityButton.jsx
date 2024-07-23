import { useContext } from 'react'

import { ShoppingCartContext } from '../../context/ShoppingCartContext'

import './change-quantity-button.css'

export default function ChangeQuantityButton({ type, name, toggleButtonIsSelected }) {
    const { shoppingCartItems, updateShoppingCart } = useContext(ShoppingCartContext)

    function changeQuantity(name) {
        const change = type === 'increment' ? 1 : -1

        if (change === -1 && shoppingCartItems[name] === 0) {
            toggleButtonIsSelected(false)
        } else {
            updateShoppingCart(name, shoppingCartItems[name] + change)
        }
    }

    return (
        <div 
            className='change-quantity-button' 
            onClick={() => changeQuantity(name)}
        >
            <img 
                src={`src/assets/images/icon-${type}-quantity.svg`} 
                alt={type} 
            />
        </div>
    )
}