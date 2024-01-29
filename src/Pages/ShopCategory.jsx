import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const all_product = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="banner" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={props.banner} width={22} alt='sort'/>
        </div>
      </div>
      <div className="shop-category-products">
        {
          all_product.map((product, i) => {
            return (props.category === product.category ? <Item key={i} id={product.id} name={product.name} img={product.image} old_price={product.old_price} new_price={product.new_price} /> :  null)
          })
        }
      </div>
      <div className="shop-category-loadMore">
        Explore more..
      </div>
    </div>
  )
}

export default ShopCategory