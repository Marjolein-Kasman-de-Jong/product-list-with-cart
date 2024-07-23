import { useState, useEffect, useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Components
import ShoppingCartHeader from '../shopping-cart-header/ShoppingCartHeader'
import ShoppingCartIsEmptyMessage from '../shopping-cart-is-empty-message/ShoppingCartIsEmptyMessage'
import ShoppingCartContent from '../shopping-cart-content/ShoppingCartContent'

// Helpers
import checkIfShoppingCartIsEmpty from '../../helpers/checkIfShoppingCartIsEmpty'
import findProductsToShow from '../../helpers/findProductsToShow'

// Styles
import './shopping-cart.css'

export default function ShoppingCart() {
  // Context
  const { shoppingCartItems } = useContext(ShoppingCartContext)

  // State
  const [isShoppingCartEmpty, setIsShoppingCartEmpty] = useState(true)
  // const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    setIsShoppingCartEmpty(checkIfShoppingCartIsEmpty(shoppingCartItems))
    // setProductsToShow(findProductsToShow(shoppingCartItems))
  }, [shoppingCartItems])

  return (
    <section className='shopping-cart'>
      <ShoppingCartHeader />
      {
        isShoppingCartEmpty ?
          <ShoppingCartIsEmptyMessage />
          :
          <ShoppingCartContent />
      }
    </section>
  )
}