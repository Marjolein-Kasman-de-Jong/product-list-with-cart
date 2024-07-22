// Styles
import './shopping-cart-item-summary-header.css'

export default function ShoppingCartItemSummaryHeader({ item }) {
    return (
        <header>
            <h3 className='heading-4'>
                {item}
            </h3>
        </header>
    )
}