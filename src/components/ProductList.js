import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  console.log('Products in ProductList:', products);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
   <div className="row">
     {products.map((product) => (
       <div key={product.item_id} className="col-lg-4 col-md-6 col-sm-12"> 
         <ProductCard product={product} addToCart={addToCart} />
       </div>
     ))}
   </div>
 );
 
};

export default ProductList;
