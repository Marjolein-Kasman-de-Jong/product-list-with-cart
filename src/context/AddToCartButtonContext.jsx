import { useState, useEffect, createContext } from 'react'
import data from '../../data.json'

export const AddToCartButtonContext = createContext()

const AddToCartButtonProvider = ({ children }) => {
    const [isActive, setIsActive] = useState({})

    // Initialize shoppingCartItems

    const initializeIsActive = () => data.map((item) => {
        setIsActive((prevItems) => {
            return { 
                ...prevItems, 
                [item.name]: false }
        })
    })

    const updateIsActive = (item, boolean) => {
        setIsActive((prevItems) => {
            return {
                ...prevItems,
                [item]: boolean
            }
        })
    }

    useEffect(() => {
        initializeIsActive()
    }, [])

    return (
        <AddToCartButtonContext.Provider value={{ isActive, initializeIsActive, updateIsActive }} >
            {children}
        </AddToCartButtonContext.Provider>
    )
}

export default AddToCartButtonProvider