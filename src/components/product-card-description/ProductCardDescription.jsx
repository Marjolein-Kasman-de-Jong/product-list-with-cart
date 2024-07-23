import './product-card-description.css'

export default function ProductCardDescription({ product }) {
    const { category, name } = product

    return (
        <hgroup className='product-card-description'>
            <p className='paragraph-1'>
                {category}
            </p>
            <h2 className='heading-3'>
                {name}
            </h2>
        </hgroup>
    )
}