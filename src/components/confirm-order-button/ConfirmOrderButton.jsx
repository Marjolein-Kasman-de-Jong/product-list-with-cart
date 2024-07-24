import './confirm-order-button.css'

export default function ConfirmOrderButton({ setIsOpen }) {
    return (
        <button
            className='confirm-order-button button-2'
            onClick={() => setIsOpen(true)}
        >
            Confirm Order
        </button>
    )
}