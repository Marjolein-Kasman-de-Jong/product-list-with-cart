import ReactDom from 'react-dom'
import OrderConfirmationModalHeader from '../order-confirmation-modal-header/OrderConfirmationModalHeader'
import OrderOverview from '../order-overview/OrderOverview'
import StartNewOrderButton from '../start-new-order-button/StartNewOrderButton'
import './order-confirmation-modal.css'

export default function OrderConfirmationModal({ open, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay'></div>
      <article className='order-confirmation-modal'>
        <OrderConfirmationModalHeader />
        <OrderOverview context='order-confirmation' />
        <footer>
          <StartNewOrderButton onClick={onClose} />
        </footer>
      </article>
    </>,
    document.getElementById('portal')
  )
}