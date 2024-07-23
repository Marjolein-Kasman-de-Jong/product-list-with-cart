import convertToCurrency from '../../helpers/convertToCurrency'
import './product-card-price.css'

export default function ProductCardPrice({ product }) {
    const { price } = product

    return (
        <p className='paragraph-2'>
            {convertToCurrency(price)}
        </p>
    )
}