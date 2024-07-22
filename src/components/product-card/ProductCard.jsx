import { useState } from 'react'

// Components
import AddToCartButton from '../add-to-cart-button/AddToCartButton'

// Helpers
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './product-card.css'

export default function ProductCard({ product }) {
    const { image, name, category, price } = product

    // Monitor button state
    const [buttonIsSelected, toggleButtonIsSelected] = useState(false)

    // Handle button click
    function handleButtonClick() {
        if (!buttonIsSelected) {
            toggleButtonIsSelected(true)
        }
    }

    return (
        <article className='product-card'>
            <header>
                <div className="image-wrapper">
                    <picture>
                        <source media='(min-width: 1440px )' srcSet={`src/${image.desktop}`} />
                        <source media='(min-width: 768px)' srcSet={`src/${image.tablet}`} />
                        <img className='product-image' src={`src/${image.mobile}`} alt={name} />
                    </picture>
                    <AddToCartButton buttonIsSelected={buttonIsSelected} toggleButtonIsSelected={toggleButtonIsSelected} handleButtonClick={handleButtonClick} item={name} />
                </div>
                <hgroup>
                    <p className='paragraph-1'>{category}</p>
                    <h2 className='heading-3'>{name}</h2>
                </hgroup>
            </header>
            <p className='paragraph-2'>{convertToCurrency(price)}</p>
        </article>
    )
}
