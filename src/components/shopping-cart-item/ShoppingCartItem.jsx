import ShoppingCartItemSummary from '../shopping-cart-item-summary/ShoppingCartItemSummary'
import RemoveItemButton from '../remove-item-button/RemoveItemButton'
import convertToCurrency from '../../helpers/convertToCurrency'
import './shopping-cart-item.css'

export default function ShoppingCartItem({ context, item, amount, singleItemPrice, totalItemPrice }) {
    return (
        <article className='shopping-cart-item'>
            <ShoppingCartItemSummary
                context={context}
                item={item}
                amount={amount}
                singleItemPrice={singleItemPrice}
                totalItemPrice={totalItemPrice}
            />
            {
                context === 'shopping-cart' ?
                    <RemoveItemButton item={item} />
                    :
                    <p className='paragraph-4'>
                        {convertToCurrency(totalItemPrice)}
                    </p>
            }
        </article>
    )
}