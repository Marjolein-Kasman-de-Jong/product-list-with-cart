import React from 'react'
import ReactDOM from 'react-dom/client'

// Context
import ShoppingCartProvider from './context/ShoppingCartContext.jsx'

// Components
import App from './App.jsx'

// Styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
        <App />
    </ShoppingCartProvider>
  </React.StrictMode >,
)