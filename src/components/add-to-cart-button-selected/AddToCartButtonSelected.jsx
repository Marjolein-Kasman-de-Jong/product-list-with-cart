import { useContext } from 'react'

import { ShoppingCartContext } from '../../context/ShoppingCartContext'

import './add-to-cart-button-selected.css'

export default function AddToCartButtonSelected({ product, toggleButtonIsSelected }) {
    const {shoppingCartItems, updateShoppingCart} = useContext(ShoppingCartContext)
    const { name } = product

    function changeQuantity(name, change) {
        if (change === -1 && shoppingCartItems[name] === 0) {
            toggleButtonIsSelected(false)
        } else {
            updateShoppingCart(name, shoppingCartItems[name] + change)
        }
    }

    return (
        <div className='button-content-selected'>
            <div className='change-quantity-button' onClick={() => changeQuantity(name, -1)}>
                <img src='src\assets\images\icon-decrement-quantity.svg' alt='Decrement' />
            </div>
            <p>{shoppingCartItems[name] ? shoppingCartItems[name] : '0'}</p>
            <div className='change-quantity-button' onClick={() => changeQuantity(name, +1)}>
                <img src='src\assets\images\icon-increment-quantity.svg' alt='Increment' />
            </div>
        </div>
    )
}