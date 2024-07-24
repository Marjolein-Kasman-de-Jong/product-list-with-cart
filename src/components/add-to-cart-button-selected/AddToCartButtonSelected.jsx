import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import ChangeQuantityButton from '../change-quantity-button/ChangeQuantityButton'
import './add-to-cart-button-selected.css'

export default function AddToCartButtonSelected({ product, buttonIsSelected, setButtonIsSelected }) {
    const {shoppingCartItems} = useContext(ShoppingCartContext)
    const { name } = product

    return (
        <div className='add-to-cart-button-selected'>
            <ChangeQuantityButton 
                type='decrement' 
                name={name}
                buttonIsSelected={buttonIsSelected} 
                setButtonIsSelected={setButtonIsSelected}
            />
            <p>
                {shoppingCartItems[name] ? shoppingCartItems[name] : '0'}
            </p>
            <ChangeQuantityButton 
                type='increment' 
                name={name}
                buttonIsSelected={buttonIsSelected} 
                setButtonIsSelected={setButtonIsSelected} 
            />
        </div>
    )
}