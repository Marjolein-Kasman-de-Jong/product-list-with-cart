import ProductCardImage from '../product-card-image/ProductCardImage'
import AddToCartButton from '../add-to-cart-button/AddToCartButton'
import ProductCardDescription from '../product-card-description/ProductCardDescription'
import ProductCardPrice from '../product-card-price/ProductCardPrice'

import './product-card.css'

export default function ProductCard({ product, buttonIsSelected, setButtonIsSelected }) {
    return (
        <article className='product-card'>
            <header>
                <div className="image-wrapper">
                    <ProductCardImage product={product} />
                    <AddToCartButton product={product} buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
                </div>
                <ProductCardDescription product={product} />
            </header>
            <ProductCardPrice product={product} />
        </article>
    )
}