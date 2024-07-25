// Components
import ProductCard from '../product-card/ProductCard'

// Constants
import data from '../../../data.json'

// Styles
import './product-overview.css'

export default function ProductOverview() {
  return (
    <section className='product-overview'>
      {/* Header */}
      <header>
        <h1 className='heading-1'>
          Desserts
        </h1>
      </header>
      {/* Product cards */}
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