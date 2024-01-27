import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collection.js';
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
          {new_collection.map((product, i) => {
            return <Item key={i} id={product.id} name={product.name} img={product.product_img} old_price={product.old_price} new_price={product.new_price} />
          })}
        </div>
    </div>
  )
}

export default NewCollection