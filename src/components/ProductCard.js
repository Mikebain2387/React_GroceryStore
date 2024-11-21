import React from 'react';

const ProductCard =({product, addToCart}) =>{


 return(
  <div className="product-card card">
   <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text"><strong>Price:</strong>${product.price.tofixed(2)}</p>
   </div>
  </div>
 )
}


exort default ProductCard;