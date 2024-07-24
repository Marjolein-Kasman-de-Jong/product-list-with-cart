import { useState, useEffect } from 'react';
import ProductList from './components/product-list/ProductList'
import ShoppingCart from './components/shopping-cart/ShoppingCart'
import OrderConfirmationModal from './components/order-confirmation-modal/OrderConfirmationModal';
import data from '../data.json'
import './App.css'

function App() {
  const [buttonIsSelected, setButtonIsSelected] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const initializeButtonIsSelected = () => data.map((item) => {
    setButtonIsSelected((prevItems) => {
      return { ...prevItems, [item.name]: false }
    })
  })

  useEffect(() => {
    initializeButtonIsSelected()
  }, [])

  return (
    <div className="page-wrapper">
      <ProductList buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
      <ShoppingCart setIsOpen={setIsOpen} buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
      <OrderConfirmationModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default App