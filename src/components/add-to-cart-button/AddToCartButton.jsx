import { useState, useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Styles
import './add-to-cart-button.css'

export default function AddToCartButton({ product }) {
    const { shoppingCartItems, updateShoppingCart } = useContext(ShoppingCartContext)

    const [buttonIsSelected, toggleButtonIsSelected] = useState(false)

    const { name } = product

    function changeQuantity(name, change) {
        if (change === -1 && shoppingCartItems[name] === 0) {
            toggleButtonIsSelected(false)
        } else {
            updateShoppingCart(name, shoppingCartItems[name] + change)
        }
    }

    return (
        <button
            className={`add-to-cart-button button-1 ${buttonIsSelected ? 'selected' : 'not-selected'}`}
            onClick={() => !buttonIsSelected && toggleButtonIsSelected(true)}
        >
            {
                buttonIsSelected ?
                    <div className='button-content-selected'>
                        <div className='change-quantity-button' onClick={() => changeQuantity(name, -1)}>
                            <img src='src\assets\images\icon-decrement-quantity.svg' alt='Decrement' />
                        </div>
                        <p>{shoppingCartItems[name] ? shoppingCartItems[name] : '0'}</p>
                        <div className='change-quantity-button' onClick={() => changeQuantity(name, +1)}>
                            <img src='src\assets\images\icon-increment-quantity.svg' alt='Increment' />
                        </div>
                    </div>
                    :
                    <div className='button-content-not-selected'>
                        <img className='shopping-cart-icon' src='src\assets\images\icon-add-to-cart.svg' alt='Shopping cart' />
                        <p>Add to cart</p>
                    </div>
            }
        </button>
    )
}