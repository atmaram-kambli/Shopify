import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums.jsx'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx'

const Product = () => {
  const all_product = useContext(ShopContext)
  const { productID } = useParams();
  const product = all_product.find((item) => item.id === Number(productID));
  return (
    <div className='product'>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product