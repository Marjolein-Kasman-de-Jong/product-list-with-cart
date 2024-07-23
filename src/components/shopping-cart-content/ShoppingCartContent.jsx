import ShoppingCartItemsContainer from '../shopping-cart-items-container/ShoppingCartItemsContainer'
import ShoppingCartOrderTotal from '../shopping-cart-order-total/ShoppingCartOrderTotal'
import Usp from '../usp/Usp'
import ConfirmOrderButton from '../confirm-order-button/ConfirmOrderButton'
import './shopping-cart-content.css'

export default function ShoppingCartContent({ setIsOpen }) {
    return (
        <>
            <ShoppingCartItemsContainer />
            <ShoppingCartOrderTotal />
            <Usp />
            <ConfirmOrderButton setIsOpen={setIsOpen} />
        </>
    )
}