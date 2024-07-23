import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import convertToCurrency from '../../helpers/convertToCurrency'
import './shopping-cart-order-total.css'

export default function ShoppingCartOrderTotal() {
    const { totalOrderPrice } = useContext(ShoppingCartContext)

    return (
        <div className="shopping-cart-order-total">
            <p className='paragraph-6'>
                Order Total
            </p>
            <p className='paragraph-7'>
                {convertToCurrency(totalOrderPrice)}
            </p>
        </div>
    )
}