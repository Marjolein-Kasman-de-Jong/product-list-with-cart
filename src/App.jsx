// Components
import ProductList from './components/product-list/ProductList'
import ShoppingCart from './components/shopping-cart/ShoppingCart'

// Styles
import './App.css'

function App() {
  return (
    <div className="page-wrapper">
      <ProductList />
      <ShoppingCart />
    </div>
  );
}

export default App