import React from 'react';
import './RelatedProduct.css';
import data_product from '../Assets/data'
import Item from '../Item/Item';

const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-item">
            {
                data_product.map((product, i) => {
                    return (<Item key={i} id={product.id} name={product.name} img={product.product_img} old_price={product.old_price} new_price={product.new_price} />);
                })
                
            }
        </div>
    </div>
  )
}

export default RelatedProduct