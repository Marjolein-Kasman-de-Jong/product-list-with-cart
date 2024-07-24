import ProductListHeader from '../product-list-header/ProductListHeader'
import ProductCardContainer from '../product-card-container/ProductCardContainer'
import './product-list.css'

export default function ProductList({ buttonIsSelected, setButtonIsSelected }) {
  return (
    <section className='product-list'>
      <ProductListHeader />
      <ProductCardContainer buttonIsSelected={buttonIsSelected} setButtonIsSelected={setButtonIsSelected} />
    </section>
  )
}