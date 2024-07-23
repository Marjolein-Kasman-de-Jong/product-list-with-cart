import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Styles
import './remove-item-button.css'

export default function RemoveItemButton({ item }) {
    const { updateShoppingCart } = useContext(ShoppingCartContext)

    const handleClick = () => {
        updateShoppingCart(item, 0)
    }

    return (
        <button 
            className='remove-item-button' 
            onClick={handleClick}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="10" 
                height="10" 
                fill="none" 
                viewBox="0 0 10 10"
            >
                <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
            </svg>
        </button>
    )
}
