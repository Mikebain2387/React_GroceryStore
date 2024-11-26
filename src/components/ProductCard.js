import React from 'react';

const ProductCard =({product, addToCart}) =>{


 return(
  <div className="product-card card h-100 ">
   <div className="card-body d-flex flex-column justify-content-between">
    <img className='img-fluid' id={product.id} src={product.image} alt="" />
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}
    </p>

    <p className="card-text">
     <strong>Price:</strong> 
     ${product.price.toFixed(2)}
    </p>

    <p className="card-text">
     <strong>Category:</strong>
      {product.category}
    </p>
    <p className="cart-text">
     <strong>Rating:</strong> 
     {product.rating} ⭐
    </p>

    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart
    </button>
   </div>
  </div>
 )
}


export default ProductCard;