import ReactDom from 'react-dom'
import OrderConfirmationModalHeader from '../order-confirmation-modal-header/OrderConfirmationModalHeader'
import ShoppingCartItemsContainer from '../shopping-cart-items-container/ShoppingCartItemsContainer'
import StartNewOrderButton from '../start-new-order-button/StartNewOrderButton'
import './order-confirmation-modal.css'

export default function OrderConfirmationModal({ open, onClose, buttonIsSelected, setButtonIsSelected }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay'></div>
      <article className='order-confirmation-modal'>
        <OrderConfirmationModalHeader />
        <ShoppingCartItemsContainer context='order-confirmation' />
        <footer>
          <StartNewOrderButton onClick={onClose} buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
        </footer>
      </article>
    </>,
    document.getElementById('portal')
  )
}