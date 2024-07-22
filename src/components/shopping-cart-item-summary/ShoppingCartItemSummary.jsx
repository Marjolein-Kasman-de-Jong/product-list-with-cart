// Components
import ShoppingCartItemSummaryHeader from '../shopping-cart-item-summary-header/ShoppingCartItemSummaryHeader'
import ShoppingCartItemSummaryPriceCalculation from '../shopping-cart-item-summary-price-calculation/ShoppingCartItemSummaryPriceCalculation'

// Styles
import './shopping-cart-item-summary.css'

export default function ShoppingCartItemSummary({ item, amount, singleItemPrice, totalItemPrice }) {
    return (
        <div className="shopping-cart-item-summary">
            <ShoppingCartItemSummaryHeader item={item} />
            <ShoppingCartItemSummaryPriceCalculation 
                amount={amount} 
                singleItemPrice={singleItemPrice} 
                totalItemPrice={totalItemPrice} 
            />
        </div>
    )
}