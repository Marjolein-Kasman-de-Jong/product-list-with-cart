import data from '../../../data.json'

import ProductListHeader from '../product-list-header/ProductListHeader'
import ProductCardContainer from '../product-card-container/ProductCardContainer'
import ProductCard from '../product-card/ProductCard'

import './product-list.css'

export default function ProductList() {
  return (
    <section className='product-list'>
      <ProductListHeader />
      <ProductCardContainer />
    </section>
  )
}