import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Styles
import './shopping-cart-header.css'

export default function ShoppingCartHeader({ }) {
    const { amountOfItemsInShoppingCart } = useContext(ShoppingCartContext)

    return (
        <header>
            <h2 className='heading-2'>
                Your Cart ({amountOfItemsInShoppingCart})
            </h2>
        </header>
    )
}