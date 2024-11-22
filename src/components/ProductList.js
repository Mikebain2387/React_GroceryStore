import React from 'react';
import ProductCard from './ProductCard';

const ProductList =({
 products, addToCart}) => {
 return (
  <div className="row">
   {products.map((product) =>(
   <div key ={product.id} className='col-lg-4 col-md-6 col-sm-12'>
    <ProductCard product ={product} addToCart ={addToCart}/>
   </div>

   ))}
  </div>
 )
}


export default ProductList;