import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  console.log('Product Image:', product.image);
  return (
    <div className="product-card card h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="image-container">
          <img className="img-fluid" id={product.image} src={product.image} alt={product.item_name} onError={(e) => { e.target.onerror = null; e.target.src = '/images/fallback.png'; }} /> 
          {/* // Ensure correct image source and fallback */}
        </div>
        <h5 className="card-title">{product.item_name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>Price: </strong>${product.price.toFixed(2)}
        </p>
        <p className="card-text">
          <strong>Category: </strong>{product.category_name}
        </p>
        <p className="cart-text">
          <strong>Rating: </strong>{product.rating} ⭐
        </p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
