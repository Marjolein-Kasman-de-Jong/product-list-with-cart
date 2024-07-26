// Components
import AddToCartButton from '../add-to-cart-button/AddToCartButton'

// Helpers
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './product-card.css'

export default function ProductCard({ product }) {
    const { category, name, price, image } = product

    return (
        <article className='product-card'>
            <header>
                <div className="wrapper">
                    {/* Product image */}
                    <picture>
                        <source
                            media='(min-width: 1440px )'
                            srcSet={`${image.desktop}`}
                        />
                        <source
                            media='(min-width: 768px)'
                            srcSet={`${image.tablet}`}
                        />
                        <img
                            className='product-image'
                            src={`${image.mobile}`}
                            alt={name}
                        />
                    </picture>
                    {/* Add to cart button */}
                    <AddToCartButton product={product} />
                </div>
                {/* Product description */}
                <hgroup className='product-description'>
                    {/* Category */}
                    <p className='paragraph-1'>
                        {category}
                    </p>
                    {/* Title */}
                    <h2 className='heading-3'>
                        {name}
                    </h2>
                </hgroup>
            </header>
            {/* Product price */}
            <p className='paragraph-2'>
                {convertToCurrency(price)}
            </p>
        </article>
    )
}