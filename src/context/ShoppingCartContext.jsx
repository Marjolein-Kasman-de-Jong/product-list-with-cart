import { useState, useEffect, createContext } from 'react'

// Constants
import data from '../constants/data'

export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [shoppingCartItems, setShoppingCartItems] = useState({})
    const [amountOfItemsInShoppingCart, setAmountOfItemsInShoppingCart] = useState(0)
    const [singleItemPrices, setSingleItemPrices] = useState({})
    const [totalItemPrices, setTotalItemPrices] = useState({})
    const [totalOrderPrice, setTotalOrderPrice] = useState(0)

    // Initialize shoppingCartItems
    const initializeShoppingCart = () => data.map((item) => {
        setShoppingCartItems((prevItems) => {
            return { ...prevItems, [item.name]: 0 }
        })
    })

    // Update shoppingCartItems
    const updateShoppingCart = (item, amount) => {
        setShoppingCartItems((prevItems) => {
            return { ...prevItems, [item]: amount }
        })
    }

    // Monitor amount of items in shopping cart
    const monitorAmountOfItemsInShoppingCart = () => {
        setAmountOfItemsInShoppingCart((prevItems) => {
            return Object.values(shoppingCartItems).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        })
    }

    // Initialize single item prices
    const initializeSingleItemPrices = () => {
        data.map((item) => {
            setSingleItemPrices((prevItems) => {
                return { ...prevItems, [item.name]: item.price }
            })
        })
    }

    // Monitor total item prices
    const monitorTotalItemPrices = () => {
        data.map((item) => {
            setTotalItemPrices((prevItems) => {
                return { ...prevItems, [item.name]: shoppingCartItems[item.name] * item.price }
            })
        })
    }

    // Monitor total order price
    const monitorTotalOrderPrice = () => {
        setTotalOrderPrice(() => {
            return Object.values(totalItemPrices).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        })
    }

    useEffect(() => {
        initializeShoppingCart()
        initializeSingleItemPrices()
    }, [])

    useEffect(() => {
        monitorAmountOfItemsInShoppingCart()
        monitorTotalItemPrices()
    }, [shoppingCartItems])

    useEffect(() => {
        monitorTotalOrderPrice()
    }, [totalItemPrices])

    return (
        <ShoppingCartContext.Provider value={{ initializeShoppingCart, shoppingCartItems, updateShoppingCart, amountOfItemsInShoppingCart, singleItemPrices, setSingleItemPrices, totalItemPrices, setTotalItemPrices, totalOrderPrice }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider