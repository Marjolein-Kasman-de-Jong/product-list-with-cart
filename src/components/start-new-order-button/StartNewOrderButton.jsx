import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

import './start-new-order-button.css'

export default function StartNewOrderButton({ onClick, buttonIsSelected, setButtonIsSelected }) {
    const { initializeShoppingCart } = useContext(ShoppingCartContext)

    function handleClick() {
        initializeShoppingCart()
        onClick()

        for (let key in buttonIsSelected) {
            if (buttonIsSelected.hasOwnProperty(key)) {
                buttonIsSelected[key] = false;
            }
        }
    }

    return (
        <button className='start-new-order-button button-2' onClick={() => handleClick()}>
            Start New Order
        </button>
    )
}