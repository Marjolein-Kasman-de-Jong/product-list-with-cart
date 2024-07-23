import ReactDom from 'react-dom'
import './order-confirmation-modal.css'

export default function OrderConfirmationModal({ open, children, onClose }) {
  if (!open) return null
  
  return ReactDom.createPortal(
    <>
    <div className='overlay'></div>
    <div className='order-confirmation-modal'>
      <button onClick={onClose}>Close modal</button>
      {children}
    </div>
    </>,
    document.getElementById('portal')
  )
}