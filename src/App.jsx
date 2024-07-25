import { useState } from 'react'
import ProductOverview from './components/product-overview/ProductOverview'
import ShoppingCart from './components/shopping-cart/ShoppingCart'
import OrderConfirmationModal from './components/order-confirmation-modal/OrderConfirmationModal'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='page-wrapper'>
      <ProductOverview />
      <ShoppingCart setIsOpen={setIsOpen} />
      <OrderConfirmationModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default App