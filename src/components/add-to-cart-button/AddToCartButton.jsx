import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import AddToCartButtonSelected from '../add-to-cart-button-selected/AddToCartButtonSelected'
import AddToCartButtonNotSelected from '../add-to-cart-button-not-selected/AddToCartButtonNotSelected'
import './add-to-cart-button.css'

export default function AddToCartButton({ product, buttonIsSelected, setButtonIsSelected }) {
    const {updateShoppingCart} = useContext(ShoppingCartContext)

    function handleClick() {
        if (!buttonIsSelected?.[product.name]) {
            setButtonIsSelected(prevState => ({
                ...prevState,
                [product.name]: true
            }))

            updateShoppingCart(product.name, 1)
        }
    }

    return (
        <button
            className={`
                add-to-cart-button 
                button-1 
                ${buttonIsSelected?.[product.name] === true ? 'selected' : 'not-selected'}
            `}
            onClick={handleClick}
        >
            {
                buttonIsSelected?.[product.name] === true ?
                    <AddToCartButtonSelected product={product} buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
                    :
                    <AddToCartButtonNotSelected />
            }
        </button>
    )
}