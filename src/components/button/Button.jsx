// Styles
import './button.css'

export default function Button({ buttonIsSelected, handleButtonClick }) {
    return (
        <button 
            className={`add-to-cart-button button-1 ${buttonIsSelected ? 'selected' : ''}`}
            onClick={handleButtonClick}
        >
            {
                buttonIsSelected ?
                    <div className='button-content-selected'>
                        <div className='change-quantity-button'>
                            <img src='src\assets\images\icon-decrement-quantity.svg' alt='Decrement' />
                        </div>
                        <p>X</p>
                        <div className='change-quantity-button'>
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
