import ShoppingCartItemsContainer from '../shopping-cart-items-container/ShoppingCartItemsContainer'
import Usp from '../usp/Usp'
import ConfirmOrderButton from '../confirm-order-button/ConfirmOrderButton'
import './shopping-cart-content.css'

export default function ShoppingCartContent({ setIsOpen, buttonIsSelected, setButtonIsSelected }) {
    return (
        <>
            <ShoppingCartItemsContainer context='shopping-cart' buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
            <Usp />
            <ConfirmOrderButton setIsOpen={setIsOpen} />
        </>
    )
}