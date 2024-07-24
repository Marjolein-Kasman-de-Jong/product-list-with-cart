import { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import ShoppingCartHeader from '../shopping-cart-header/ShoppingCartHeader'
import ShoppingCartIsEmptyMessage from '../shopping-cart-is-empty-message/ShoppingCartIsEmptyMessage'
import ShoppingCartContent from '../shopping-cart-content/ShoppingCartContent'
import checkIfShoppingCartIsEmpty from '../../helpers/checkIfShoppingCartIsEmpty'
import './shopping-cart.css'

export default function ShoppingCart({ setIsOpen }) {
  const { shoppingCartItems } = useContext(ShoppingCartContext)
  const [isShoppingCartEmpty, setIsShoppingCartEmpty] = useState(true)

  useEffect(() => {
    setIsShoppingCartEmpty(checkIfShoppingCartIsEmpty(shoppingCartItems))
  }, [shoppingCartItems])

  return (
    <section className='shopping-cart'>
      <ShoppingCartHeader />
      {
        isShoppingCartEmpty ?
          <ShoppingCartIsEmptyMessage />
          :
          <ShoppingCartContent setIsOpen={setIsOpen} />
      }
    </section>
  )
}