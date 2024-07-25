// Components
import AddToCartButton from '../add-to-cart-button/AddToCartButton'

// Helpers
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './product-card.css'

export default function ProductCard({ product }) {
    const { category, name, price, image } = product
    const desktopImagePath = `./src/${image.desktop}`
    const tabletImagePath = `./src/${image.tablet}`
    const mobileImagePath = `./src/${image.mobile}`

    return (
        <article className='product-card'>
            <header>
                <div className="wrapper">
                    {/* Product image */}
                    <picture>
                        <source
                            media='(min-width: 1440px )'
                            srcSet={desktopImagePath}
                        />
                        <source
                            media='(min-width: 768px)'
                            srcSet={tabletImagePath}
                        />
                        <img
                            className='product-image'
                            src={mobileImagePath}
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