import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AddToCartButtonContext } from '../../context/AddToCartButtonContext'

// Components
import AddToCartButtonSelected from '../add-to-cart-button-selected/AddToCartButtonSelected'
import AddToCartButtonNotSelected from '../add-to-cart-button-not-selected/AddToCartButtonNotSelected'

// Styles
import './add-to-cart-button.css'

export default function AddToCartButton({ product }) {
    const { updateShoppingCart } = useContext(ShoppingCartContext)
    const { isActive, updateIsActive } = useContext(AddToCartButtonContext)

    const { name } = product

    // Handle add to cart button click
    function handleClick() {
        if (!isActive[name]) {
            updateIsActive(name, true)
            updateShoppingCart(name, 1)
        }
    }

    return (
        <button
            className={`add-to-cart-button button-1 ${isActive[name] === true ? 'selected' : 'not-selected'}
            `}
            onClick={handleClick}
        >
            {
                isActive[name] === true ?
                    <AddToCartButtonSelected product={product} />
                    :
                    <AddToCartButtonNotSelected />
            }
        </button>
    )
}