import { useState, useEffect, createContext } from 'react'

// Constants
import data from '../../data.json'

export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [shoppingCartItems, setShoppingCartItems] = useState({})

    useEffect(() => {
        data.map((item) => {
            setShoppingCartItems((prevItems) => {
                return { ...prevItems, [item.name]: 0 }
            })
        })
    }, [])

    const updateShoppingCart = (item, amount) => {
        setShoppingCartItems((prevItems) => {
            return { ...prevItems, [item]: amount }
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ shoppingCartItems, updateShoppingCart }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider