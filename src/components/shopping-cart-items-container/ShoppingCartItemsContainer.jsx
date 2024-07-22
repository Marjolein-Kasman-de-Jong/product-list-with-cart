// Components
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem'

// Styles
import './shopping-cart-items-container.css'

export default function ShoppingCartItemsContainer({ productsToShow, singleItemPrices, totalItemPrices }) {
    return (
        <div className="shopping-cart-items-container">
            {
                productsToShow.map((product) => {
                    return <ShoppingCartItem 
                                key={product[0]} 
                                item={product[0]} 
                                amount={product[1]} 
                                singleItemPrice={singleItemPrices[product[0]]} 
                                totalItemPrice={totalItemPrices[product[0]]} 
                            />
                })
            }
        </div>
    )
}