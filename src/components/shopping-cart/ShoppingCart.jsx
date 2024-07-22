import { useState, useEffect, useContext } from 'react'

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

// Components
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem'

// Styles
import './shopping-cart.css'

export default function ShoppingCart() {
  const { shoppingCartItems, updateShoppingCart } = useContext(ShoppingCartContext)
  const { singleItemPrices, setSingleItemPrices } = useContext(ShoppingCartContext)
  const { totalItemPrices, setTotalItemPrices } = useContext(ShoppingCartContext)
  const { amountOfItemsInShoppingCart} = useContext(ShoppingCartContext)
  const [isShoppingCartEmpty, setIsShoppingCartEmpty] = useState(true)
  const [productsToShow, setProductsToShow] = useState([])

  useEffect(() => {
    const checkIfShoppingCartIsEmpty = () => {
      return Object.values(shoppingCartItems).every(value => value === 0)
    }

    setIsShoppingCartEmpty(checkIfShoppingCartIsEmpty())
  }, [shoppingCartItems])

  useEffect(() => {
    const findProductsToShow = () => {
      return Object.entries(shoppingCartItems).filter(([key, value]) => value != 0)
    }

    setProductsToShow(findProductsToShow())
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
    </section>
  )
}