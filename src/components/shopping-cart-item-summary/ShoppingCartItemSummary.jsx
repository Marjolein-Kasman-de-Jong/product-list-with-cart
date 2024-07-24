import ShoppingCartItemSummaryHeader from '../shopping-cart-item-summary-header/ShoppingCartItemSummaryHeader'
import ShoppingCartItemSummaryPriceCalculation from '../shopping-cart-item-summary-price-calculation/ShoppingCartItemSummaryPriceCalculation'
import './shopping-cart-item-summary.css'

export default function ShoppingCartItemSummary({ context, item, amount, singleItemPrice, totalItemPrice }) {
    return (
        <div className="shopping-cart-item-summary">
            <ShoppingCartItemSummaryHeader item={item} />
            <ShoppingCartItemSummaryPriceCalculation
                context={context} 
                amount={amount} 
                singleItemPrice={singleItemPrice} 
                totalItemPrice={totalItemPrice} 
            />
        </div>
    )
}