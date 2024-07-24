import convertToCurrency from '../../helpers/convertToCurrency'
import './shopping-cart-item-summary-price-calculation.css'

export default function ShoppingCartItemSummaryPriceCalculation({ context, amount, singleItemPrice, totalItemPrice }) {
    return (
        <div className="shopping-cart-item-summary-price-calculation">
            <p className='paragraph-5'>
                {`${amount}x`}
            </p>
            <p className='paragraph-1'>
                {convertToCurrency(singleItemPrice)}
            </p>
            {
                context === 'shopping-cart' ?
                    <p className='paragraph-3'>
                        {convertToCurrency(totalItemPrice)}
                    </p>
                    :
                    null    
        }
        </div>
    )
}