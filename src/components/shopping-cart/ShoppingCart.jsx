import { useState, useEffect, useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Components
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem'

// Helpers
import checkIfShoppingCartIsEmpty from '../../helpers/checkIfShoppingCartIsEmpty'
import findProductsToShow from '../../helpers/findProductsToShow'
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './shopping-cart.css'

export default function ShoppingCart() {
  const { shoppingCartItems, singleItemPrices, totalItemPrices, amountOfItemsInShoppingCart, totalOrderPrice } = useContext(ShoppingCartContext)
  const [isShoppingCartEmpty, setIsShoppingCartEmpty] = useState(true)
  const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    setIsShoppingCartEmpty(checkIfShoppingCartIsEmpty(shoppingCartItems))
    setProductsToShow(findProductsToShow(shoppingCartItems))
  }, [shoppingCartItems])


  return (
    <section className='shopping-cart'>
      <header>
        <h2 className='heading-2'>Your Cart ({amountOfItemsInShoppingCart()})</h2>
      </header>
      <div className="ordered-items-container">
        {
          isShoppingCartEmpty ?
            <article className='cart-is-empty-message paragraph-11'>
              <img src="src\assets\images\illustration-empty-cart.svg" alt="Cake" />
              <p>Your added items will appear here</p>
            </article>
            :
            productsToShow.map((product) => {
              return <ShoppingCartItem key={product[0]} item={product[0]} amount={product[1]} singleItemPrice={singleItemPrices[product[0]]} totalItemPrice={totalItemPrices[product[0]]} />
            })
        }
      </div>
      {
        isShoppingCartEmpty ?
          null
          :
          <footer className="order-total-container">
            <p className='paragraph-6'>Order Total</p>
            <p className='paragraph-7'>{convertToCurrency(totalOrderPrice)}</p>
          </footer>
      }
    </section>
  )
}