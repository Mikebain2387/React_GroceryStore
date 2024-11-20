import React from "react";

const Cart =({cart, updateCart, checkout}) => {
 const subtotal =cart.reduce((total,item)) => total + item.price * item.quantity, 0);

 const handleRemove = (id) => {
  updateCart((prevCart) => prevCart.filter((item) => item.id !==id));
 };

 
}