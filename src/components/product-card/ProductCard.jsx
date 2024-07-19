// Helpers
import convertToCurrency from '../../helpers/convertToCurrency'

// Styles
import './product-card.css'

export default function ProductCard({ product }) {
    const { image, name, category, price } = product

    return (
        <article className='product-card'>
            <header>
                <picture>
                    <source media='(min-width: 1440px )' srcSet={`src/${image.desktop}`} />
                    <source media='(min-width: 768px)' srcSet={`src/${image.tablet}`} />
                    <img src={`src/${image.mobile}`} alt={`src/${image.name}`} />
                </picture>
                <hgroup>
                    <p className='paragraph-1'>{category}</p>
                    <h2 className='heading-3'>{name}</h2>
                </hgroup>
            </header>
            <p className='paragraph-2'>{convertToCurrency(price)}</p>
        </article>
    )
}
