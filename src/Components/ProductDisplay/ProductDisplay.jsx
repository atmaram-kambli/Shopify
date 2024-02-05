import React from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/logo.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-img-list">
                <img src={product.image} width={200} alt="" />
                <img src={product.image} width={200} alt="" />
                <img src={product.image} width={200} alt="" />
                <img src={product.image} width={200} alt="" />
            </div>
            <div className="product-display-img">
                <img src={product.image} width={400} alt="" />
            </div>
        </div>
        <div className="product-display-right">
            <h1>{ product.name }</h1>
            <div className="product-display-right-stars">
                <img src={start_icon} width={30} alt="" />
                <img src={start_icon} width={30} alt="" />
                <img src={start_icon} width={30} alt="" />
                <img src={start_icon} width={30} alt="" />
                <img src={start_icon} width={30} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-display-right-prices">
                <div className="product-display-right-price-old">${product.old_price}</div>
                <div className="product-display-right-price-new">${product.new_price}</div>
            </div>
            <div className="product-display-right-desc">
                A lightweight, usually knitted, pullover shiry, close-fitting, and full wizardy filling, with bunch of round neckline and short sleeves, best for summer
            </div>
            <div className="product-display-right-size">
                <h1>Select Size</h1>
                <div className="product-display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-display-right-category'><span>Category: </span>T-shirt, shirt, jackets</p>
            <p className='product-display-right-category'><span>Tags: </span>Latest, modern, tech</p>
        </div>
    </div>
  )
}

export default ProductDisplay