import { useState, useEffect, useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Components
import ShoppingCartHeader from '../shopping-cart-header/ShoppingCartHeader'
import ShoppingCartIsEmptyMessage from '../shopping-cart-is-empty-message/ShoppingCartIsEmptyMessage'
import ShoppingCartItemsContainer from '../shopping-cart-items-container/ShoppingCartItemsContainer'
import ShoppingCartOrderTotal from '../shopping-cart-order-total/ShoppingCartOrderTotal'
import Usp from '../usp/Usp'
import ConfirmOrderButton from '../confirm-order-button/ConfirmOrderButton'

// Helpers
import checkIfShoppingCartIsEmpty from '../../helpers/checkIfShoppingCartIsEmpty'
import findProductsToShow from '../../helpers/findProductsToShow'

// Styles
import './shopping-cart.css'

export default function ShoppingCart() {
  // Context
  const {
    shoppingCartItems,
    singleItemPrices,
    totalItemPrices,
    amountOfItemsInShoppingCart,
    totalOrderPrice
  } = useContext(ShoppingCartContext)

  // State
  const [isShoppingCartEmpty, setIsShoppingCartEmpty] = useState(true)
  const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    setIsShoppingCartEmpty(checkIfShoppingCartIsEmpty(shoppingCartItems))
    setProductsToShow(findProductsToShow(shoppingCartItems))
  }, [shoppingCartItems])

  return (
    <section className='shopping-cart'>
      <ShoppingCartHeader amountOfItemsInShoppingCart={amountOfItemsInShoppingCart} />
      {
        isShoppingCartEmpty ?
          <ShoppingCartIsEmptyMessage />
          :
          <>
            <ShoppingCartItemsContainer productsToShow={productsToShow} singleItemPrices={singleItemPrices} totalItemPrices={totalItemPrices} />
            <ShoppingCartOrderTotal totalOrderPrice={totalOrderPrice} />
            <Usp />
            <ConfirmOrderButton />
          </>
      }
    </section>
  )
}