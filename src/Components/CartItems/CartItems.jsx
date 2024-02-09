import React from 'react';
import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/logo.png';


const CartItems = () => {
  
  const {getTotalCartAmount ,all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
        all_product && all_product.map((item, i) => {
          if(cartItems[item.id] > 0) {
            return (<div>
                      <div className="cartitems-format cartitems-format-main ">
                        <img src={item.image} className='cartitems-product-icon' alt="" />
                        <p>{item.name}</p>
                        <p>${item.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[item.id]}</button>
                        <p>{cartItems[item.id]*item.new_price}</p>
                        <img src={remove_icon} className='cartitems-remove-icon' onClick={() => {removeFromCart(item.id)}} alt="" />
                      </div>
                    </div>
            )
          }
          return null;
        })
      }
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCCED TO CHECKOUT</button>
          </div>
        </div>
          <div className="cartitems-promocode">
            <p>If you have promo code,Eenter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartItems;