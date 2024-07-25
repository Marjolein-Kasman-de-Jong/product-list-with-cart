import { useState, useEffect, createContext } from 'react'

// Constants
import data from '../../data.json'

export const AddToCartButtonContext = createContext()

const AddToCartButtonProvider = ({ children }) => {
    const [isActive, setIsActive] = useState({})

    // Initialize add to cart button states
    const initializeIsActive = () => data.map((item) => {
        setIsActive((prevItems) => {
            return {
                ...prevItems,
                [item.name]: false
            }
        })
    })

    // Update add to cart button states
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
        <AddToCartButtonContext.Provider value={{ isActive, initializeIsActive, updateIsActive }}>
            {children}
        </AddToCartButtonContext.Provider>
    )
}

export default AddToCartButtonProvider