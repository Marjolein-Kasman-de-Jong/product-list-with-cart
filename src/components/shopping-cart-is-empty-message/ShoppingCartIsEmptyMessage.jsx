// Styles
import './shopping-cart-is-empty-message.css'

export default function ShoppingCartIsEmptyMessage() {
    return (
        <article className='cart-is-empty-message paragraph-11'>
            <img
                src="src\assets\images\illustration-empty-cart.svg"
                alt="Cake"
            />
            <p>
                Your added items will appear here
            </p>
        </article>
    )
}
