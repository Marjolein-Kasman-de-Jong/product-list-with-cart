// Constants
import data from '../../../data.json'

// Components
import ProductCard from '../product-card/ProductCard'

// Styles
import './product-list.css'

export default function ProductList() {
  return (
    <section className='product-list'>
      <header>
        <h1 className='heading-1'>
          Desserts
        </h1>
      </header>
      <div className='product-card-container'>
        {
          data.map((product) => {
            return <ProductCard key={product.name} product={product} />
          })
        }
      </div>
    </section>
  )
}