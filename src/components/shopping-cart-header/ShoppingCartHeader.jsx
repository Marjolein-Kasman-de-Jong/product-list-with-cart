import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
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