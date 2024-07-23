import './product-card-image.css'

export default function ProductCardImage({ product }) {
    const { image, name } = product

    return (
        <picture>
            <source 
                media='(min-width: 1440px )' 
                srcSet={`src/${image.desktop}`} 
            />
            <source 
                media='(min-width: 768px)' 
                srcSet={`src/${image.tablet}`} 
            />
            <img 
                className='product-image' 
                src={`src/${image.mobile}`} 
                alt={name} 
            />
        </picture>
    )
}