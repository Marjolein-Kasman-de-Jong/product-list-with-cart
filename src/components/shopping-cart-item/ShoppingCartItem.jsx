// Components
import ShoppingCartItemSummary from '../shopping-cart-item-summary/ShoppingCartItemSummary'
import RemoveItemButton from '../remove-item-button/RemoveItemButton'

// Styles
import './shopping-cart-item.css'

export default function ShoppingCartItem({ item, amount, singleItemPrice, totalItemPrice }) {

    return (
        <article className='shopping-cart-item'>
            <ShoppingCartItemSummary 
                item={item} 
                amount={amount} 
                singleItemPrice={singleItemPrice} 
                totalItemPrice={totalItemPrice} 
            />
            <RemoveItemButton item={item} />
        </article>
    )
}