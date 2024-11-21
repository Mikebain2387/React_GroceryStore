import React from 'react';

const ProductCard =({product, addToCart}) =>{


 return(
  <div className="product-card card">
   <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text"><strong>Price:</strong>${product.price.tofixed(2)}</p>
    <p className="cart-text"><strong>Category:</strong> {product.category}</p>
    <p className="cart-text"><strong>Rating:</strong> ⭐ {product.category}</p>
    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to CArt</button>
   </div>
  </div>
 )
}


export default ProductCard;