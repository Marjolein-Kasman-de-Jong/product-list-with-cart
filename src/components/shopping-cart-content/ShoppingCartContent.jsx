import ShoppingCartItemsContainer from '../order-overview/OrderOverview'
import Usp from '../usp/Usp'
import ConfirmOrderButton from '../confirm-order-button/ConfirmOrderButton'
import './shopping-cart-content.css'

export default function ShoppingCartContent({ setIsOpen }) {
    return (
        <>
            <ShoppingCartItemsContainer context='shopping-cart' />
            <Usp />
            <ConfirmOrderButton setIsOpen={setIsOpen} />
        </>
    )
}