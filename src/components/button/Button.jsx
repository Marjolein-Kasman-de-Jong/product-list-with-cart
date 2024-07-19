import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Styles
import './button.css'

export default function Button({ buttonIsSelected, toggleButtonIsSelected, handleButtonClick, item }) {
    const { shoppingCartItems, updateShoppingCart } = useContext(ShoppingCartContext)

    function changeQuantity(item, change) {
        if (change === -1 && shoppingCartItems[item] === 0) {
            toggleButtonIsSelected(false)
        } else {
            updateShoppingCart(item, shoppingCartItems[item] + change);
        }
    }

    return (
        <button
            className={`add-to-cart-button button-1 ${buttonIsSelected ? 'selected' : ''}`}
            onClick={handleButtonClick}
        >
            {
                buttonIsSelected ?
                    <div className='button-content-selected'>
                        <div className='change-quantity-button' onClick={() => changeQuantity(item, -1)}>
                            <img src='src\assets\images\icon-decrement-quantity.svg' alt='Decrement' />
                        </div>
                        <p>{shoppingCartItems[item] ? shoppingCartItems[item] : '0'}</p>
                        <div className='change-quantity-button' onClick={() => changeQuantity(item, +1)}>
                            <img src='src\assets\images\icon-increment-quantity.svg' alt='Increment' />
                        </div>
                    </div>
                    :
                    <div className='button-content-not-selected'>
                        <img className='shopping-cart-icon' src='src\assets\images\icon-add-to-cart.svg' alt='Shopping cart' />
                        Add to cart
                    </div>
            }
        </button>
    )
}
