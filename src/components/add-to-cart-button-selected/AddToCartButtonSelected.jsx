import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import ChangeQuantityButton from '../change-quantity-button/ChangeQuantityButton'
import './add-to-cart-button-selected.css'

export default function AddToCartButtonSelected({ product, toggleButtonIsSelected }) {
    const {shoppingCartItems} = useContext(ShoppingCartContext)
    const { name } = product

    return (
        <div className='add-to-cart-button-selected'>
            <ChangeQuantityButton 
                type='decrement' 
                name={name} 
                toggleButtonIsSelected={toggleButtonIsSelected}
            />
            <p>
                {shoppingCartItems[name] ? shoppingCartItems[name] : '0'}
            </p>
            <ChangeQuantityButton 
                type='increment' 
                name={name} 
                toggleButtonIsSelected={toggleButtonIsSelected} 
            />
        </div>
    )
}