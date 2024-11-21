import React from "react";

const Cart =({cart, updateCart, checkout}) => {
 const subtotal =cart.reduce((total,item) => total + item.price * item.quantity, 0);

 const handleRemove = (id) => {
  updateCart((prevCart) => prevCart.filter((item) => item.id !==id));
 };

 const handleAddOne = (id) =>{
  updateCart((prevCart) => prevCart.map((item) => (item.id === id ? {...item, quantity: item.quantity + 1} : item))
 );
 };

 const handleRemoveOne = (id) => {
  updateCart((prevCart) => prevCart.map((item) => (item.id === id ? {...item, quantity: item.quantity - 1} : item)).filter((item) =>item.quantity > 0)
 );
 };

 return(
  <div className="cart">
   <h2>Your Cart</h2>
   {cart.length ===0 ? (
    <p>Your cart is empty</p>
   ): (
    <table className="table">
     <thead>
      <tr>
       <th>Item</th>
       <th>Quantity</th>
       <th>Price</th>
       <th>Actions</th>
      </tr>
     </thead>
      <tbody>
       {cart.map((item) =>(
        <tr key={item.id}>
         
         <td>{item.name} </td>
         <td>{item.quantity} </td>
         <td>${(item.price * item.quantity).toFixed(2)} </td>

         <button onClick={()=> handleAddOne(item.id) } className="btn btn-sm btn-success me-1">
           +
         </button>

         <button onClick={()=> handleRemoveOne(item.id) } className="btn btn-sm btn-warning me-1">
           -
         </button>

         <button onClick={()=> handleRemove(item.id) } className="btn btn-sm btn-danger me-1">
           Delete
         </button>

        </tr>
       ))}
      </tbody>
    </table>
   )}
   <p>
    <strong>Subtotal:</strong>
    ${subtotal.toFixed(2)}
    </p>
    <button className="btn btn-primary" onClick={checkout} disabled={cart.length===0} >Checkout</button>
  </div>
 )


}

export default Cart;