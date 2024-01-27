import React from 'react';
import './Popular.css';
import products from '../Assets/data.js';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-items">
            {products.map((product, i) => {
                return (
                        <Item key={i} id={product.id} name={product.name} img={product.product_img} old_price={product.old_price} new_price={product.new_price} />
                );
        })}
        </div>

    </div>
  )
}

export default Popular