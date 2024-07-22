// Components
import RemoveItemButton from '../remove-item-button/RemoveItemButton'

// Helpers
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './shopping-cart-item.css'

export default function ShoppingCartItem({ item, amount, singleItemPrice, totalItemPrice }) {
    return (
        <article className='shopping-cart-item'>
            <div className="item-summary">
                <h3 className='heading-4'>{item}</h3>
                <div className="calculation">
                    <p className='paragraph-5'>{`${amount}x`}</p>
                    <p className='paragraph-1'>{convertToCurrency(singleItemPrice)}</p>
                    <p className='paragraph-3'>{convertToCurrency(totalItemPrice)}</p>
                </div>
            </div>
            <RemoveItemButton item={item} />
        </article>
    )
}