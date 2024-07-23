import { useState } from 'react'

import AddToCartButtonSelected from '../add-to-cart-button-selected/AddToCartButtonSelected'
import AddToCartButtonNotSelected from '../add-to-cart-button-not-selected/AddToCartButtonNotSelected'

import './add-to-cart-button.css'

export default function AddToCartButton({ product }) {
    const [buttonIsSelected, toggleButtonIsSelected] = useState(false)

    return (
        <button
            className={`add-to-cart-button button-1 ${buttonIsSelected ? 'selected' : 'not-selected'}`}
            onClick={() => !buttonIsSelected && toggleButtonIsSelected(true)}
        >
            {
                buttonIsSelected ?
                    <AddToCartButtonSelected product={product} toggleButtonIsSelected={toggleButtonIsSelected} />
                    :
                    <AddToCartButtonNotSelected />
            }
        </button>
    )
}