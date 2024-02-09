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
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]:prev[itemID]+1}))
    }
    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]:prev[itemID]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += (itemInfo.new_price * cartItems[item]);
            }
        }
        return totalAmount;
    }

    const getTotalCartQuantiry = () => {
        let totalCartItems = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) totalCartItems += cartItems[item];
        }
        return totalCartItems;
    }

    const contextValue = {getTotalCartQuantiry, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart} ;
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;