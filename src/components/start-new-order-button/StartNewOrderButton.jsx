import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { AddToCartButtonContext } from '../../context/AddToCartButtonContext'

import './start-new-order-button.css'

export default function StartNewOrderButton({ onClick }) {
    const { initializeShoppingCart } = useContext(ShoppingCartContext)
    const { isActive, initializeIsActive, updateIsActive } = useContext(AddToCartButtonContext)

    function handleClick() {
        initializeShoppingCart()
        initializeIsActive()
        onClick()
    }

    return (
        <button className='start-new-order-button button-2' onClick={() => handleClick()}>
            Start New Order
        </button>
    )
}