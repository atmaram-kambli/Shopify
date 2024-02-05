import { useState, createContext } from "react";
import all_product from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let carts = {};
    for (let index = 0; index < all_product.length+1; index++) {
        carts[index] = 0;
    }
    return carts;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart())
    console.log(cartItem)
    const addToCart = (itemID) => {
        setCartItem((prev) => ({...prev, [itemID]:prev[itemID]+1}))
    }
    const removeFromCart = (itemID) => {
        setCartItem((prev) => ({...prev, [itemID]:prev[itemID]-1}))
    }

    const contextValue = {all_product, cartItem, addToCart, removeFromCart} ;
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;