import React from 'react'
import ReactDOM from 'react-dom/client'

// Context
import ShoppingCartProvider from './context/ShoppingCartContext.jsx'
import AddToCartButtonProvider from './context/AddToCartButtonContext.jsx'

// Components
import App from './App.jsx'

// Styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <AddToCartButtonProvider>
        <App />
      </AddToCartButtonProvider>
    </ShoppingCartProvider>
  </React.StrictMode >,
)