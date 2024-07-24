import ProductCard from '../product-card/ProductCard'
import data from '../../../data.json'
import './product-card-container.css'

export default function ProductCardContainer({ buttonIsSelected, setButtonIsSelected }) {
  return (
    <div className='product-card-container'>
      {
        data.map((product) => {
          return <ProductCard key={product.name} product={product} buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
        })
      }
    </div>
  )
}