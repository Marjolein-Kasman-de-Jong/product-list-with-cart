import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Components
import ChangeQuantityButton from '../change-quantity-button/ChangeQuantityButton'

// Styles
import './add-to-cart-button-selected.css'

export default function AddToCartButtonSelected({ product }) {
    const {shoppingCartItems} = useContext(ShoppingCartContext)

    const { name } = product

    return (
        <div className='add-to-cart-button-selected'>
            {/* Decrement button */}
            <ChangeQuantityButton 
                type='decrement' 
                name={name}
            />
            {/* Amount of items in shopping cart */}
            <p>
                {shoppingCartItems[name] ? shoppingCartItems[name] : '0'}
            </p>
            {/* Increment button */}
            <ChangeQuantityButton 
                type='increment' 
                name={name}
            />
        </div>
    )
}