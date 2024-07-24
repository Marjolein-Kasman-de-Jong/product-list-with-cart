import ReactDom from 'react-dom'
import OrderConfirmationModalHeader from '../order-confirmation-modal-header/OrderConfirmationModalHeader'
import ShoppingCartItemsContainer from '../shopping-cart-items-container/ShoppingCartItemsContainer'
import './order-confirmation-modal.css'

export default function OrderConfirmationModal({ open, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay'></div>
      <article className='order-confirmation-modal'>
        <OrderConfirmationModalHeader />
        <ShoppingCartItemsContainer context='order-confirmation' />
        <footer>
          <button onClick={onClose}>Close modal</button>
        </footer>
      </article>
    </>,
    document.getElementById('portal')
  )
}