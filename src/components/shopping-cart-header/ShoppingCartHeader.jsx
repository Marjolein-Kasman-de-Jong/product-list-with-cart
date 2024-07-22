// Styles
import './shopping-cart-header.css'

export default function ShoppingCartHeader({ amountOfItemsInShoppingCart }) {
    return (
        <header>
            <h2 className='heading-2'>
                Your Cart ({amountOfItemsInShoppingCart})
            </h2>
        </header>
    )
}