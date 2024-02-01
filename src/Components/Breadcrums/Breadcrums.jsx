import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/logo.png';

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
        HOME <img src={arrow_icon} width={22} alt="" /> SHOP <img src={arrow_icon} width={22} alt="" /> {product.category} <img src={arrow_icon} width={22} alt="" />{product.name}
    </div>
  )
}

export default Breadcrums