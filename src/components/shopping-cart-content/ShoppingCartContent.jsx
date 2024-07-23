import { useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Components
import ShoppingCartItemsContainer from '../shopping-cart-items-container/ShoppingCartItemsContainer'
import ShoppingCartOrderTotal from '../shopping-cart-order-total/ShoppingCartOrderTotal'
import Usp from '../usp/Usp'
import ConfirmOrderButton from '../confirm-order-button/ConfirmOrderButton'

// Styles
import './shopping-cart-content.css'

export default function ShoppingCartContent() {
    const { totalOrderPrice} = useContext(ShoppingCartContext)

    return (
        <>
            <ShoppingCartItemsContainer />
            <ShoppingCartOrderTotal totalOrderPrice={totalOrderPrice} />
            <Usp />
            <ConfirmOrderButton />
        </>
    )
}

