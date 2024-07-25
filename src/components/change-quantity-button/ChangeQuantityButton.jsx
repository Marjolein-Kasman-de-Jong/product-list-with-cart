import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AddToCartButtonContext } from '../../context/AddToCartButtonContext'
import './change-quantity-button.css'

export default function ChangeQuantityButton({ type, name }) {
    const { shoppingCartItems, updateShoppingCart } = useContext(ShoppingCartContext)
    const { updateIsActive } = useContext(AddToCartButtonContext)

    function handleClick() {
        const change = type === 'increment' ? 1 : -1
        
        if (change === -1 && shoppingCartItems[name] === 1) {
                updateIsActive(name, false)
        }

        updateShoppingCart(name, shoppingCartItems[name] + change)
    }

    return (
        <div 
            className='change-quantity-button' 
            onClick={() => handleClick()}
        >
            <img 
                src={`src/assets/images/icon-${type}-quantity.svg`} 
                alt={type} 
            />
        </div>
    )
}