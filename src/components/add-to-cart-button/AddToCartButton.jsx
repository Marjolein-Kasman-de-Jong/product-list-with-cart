import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AddToCartButtonContext } from '../../context/AddToCartButtonContext'
import AddToCartButtonSelected from '../add-to-cart-button-selected/AddToCartButtonSelected'
import AddToCartButtonNotSelected from '../add-to-cart-button-not-selected/AddToCartButtonNotSelected'
import './add-to-cart-button.css'

export default function AddToCartButton({ product }) {
    const { updateShoppingCart } = useContext(ShoppingCartContext)
    const { isActive, updateIsActive } = useContext(AddToCartButtonContext)

    function handleClick() {
        if (!isActive[product.name]) {
            updateIsActive(product.name, true)
            updateShoppingCart(product.name, 1)
        }
    }

    return (
        <button
            className={`
                add-to-cart-button 
                button-1 
                ${isActive[product.name] === true ? 'selected' : 'not-selected'}
            `}
            onClick={handleClick}
        >
            {
                isActive[product.name] === true ?
                    <AddToCartButtonSelected product={product} />
                    :
                    <AddToCartButtonNotSelected />
            }
        </button>
    )
}