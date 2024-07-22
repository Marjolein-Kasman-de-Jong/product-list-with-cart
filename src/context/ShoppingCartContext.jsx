import { useState, useEffect, createContext } from 'react'

// Constants
import data from '../../data.json'

export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [shoppingCartItems, setShoppingCartItems] = useState({})
    const [singleItemPrices, setSingleItemPrices] = useState({})
    const [totalItemPrices, setTotalItemPrices] = useState({})

    // Initialize shoppingCartItems
    useEffect(() => {
        data.map((item) => {
            setShoppingCartItems((prevItems) => {
                return { ...prevItems, [item.name]: 0 }
            })
        })
    }, [])

    // Update shoppingCartItems
    const updateShoppingCart = (item, amount) => {
        setShoppingCartItems((prevItems) => {
            return { ...prevItems, [item]: amount }
        })
    }

    // Count amount of items in shoppingCart
    const amountOfItemsInShoppingCart = () => {
        return Object.values(shoppingCartItems).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

    // Initialize singleItemPrices
    useEffect(() => {
        data.map((item) => {
            setSingleItemPrices((prevItems) => {
                return { ...prevItems, [item.name]: item.price }
            })
        })
    }, [])

    // Monitor totalItemPrices
    useEffect(() => {
        data.map((item) => {
            setTotalItemPrices((prevItems) => {
                return { ...prevItems, [item.name]: shoppingCartItems[item.name] * item.price }
            })
        })
    }, [shoppingCartItems])

    return (
        <ShoppingCartContext.Provider value={{ shoppingCartItems, updateShoppingCart, amountOfItemsInShoppingCart, singleItemPrices, setSingleItemPrices, totalItemPrices, setTotalItemPrices }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider