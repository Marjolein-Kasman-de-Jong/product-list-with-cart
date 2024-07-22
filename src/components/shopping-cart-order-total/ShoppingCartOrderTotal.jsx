// Helpers
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './shopping-cart-order-total.css'

export default function ShoppingCartOrderTotal({ totalOrderPrice }) {
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