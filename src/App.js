import React, {useState} from 'react';
import products from './components/data';
import ProductList from './components/ProductList';
import Cart from './components/cart'
import Checkout from './components/Checkout';
import './styles.css'

function App(){
const [cart, setCart]=useState([]);
//track current page
const [currentPage, setCurrentPage] = useState('products');


const addToCart = (product) => {
 setCart((prevCart) => {

  //check if product is already in the cart
  const itemExists = prevCart.find ((item) => item.id === product.id);
  if(itemExists) {

   //if it exist, add to the quantity +1
   return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item 
  );
   
  }
  else {

   //if it does not exist, add it to the cart with quantity of 1
   return[...prevCart, {...product, quantity: 1}];
  }
 }
 );
};



let content;

if(currentPage ==='products'){
 content = <ProductList products={products} addToCart={addToCart} />;
}
else if (currentPage === 'cart'){

 content = <Cart cart={cart} updateCart={setCart} checkout ={() => setCurrentPage('checkout')}/>;
}

else if(currentPage === 'checkout') {
 content = <Checkout/>;
}


 return(
  <div className="container">
   <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <div className="container-fluid">
     <a className='navbar-brand' href="#">Bain's Fresh Market</a>
     <ul className="navbar-nav ms-auto">
      <li className="nav-item link">
       <button className="btn btn-link nav-link" onClick={()=> setCurrentPage('products')}>Products</button>
      </li>
      <li className="nav-item link">
       <button className="btn btn-link nav-link" onClick={() =>setCurrentPage('cart')}>Cart ({cart.reduce((total,item) => total + item.quantity, 0)})</button>
      </li>
     </ul>
    </div>
   </nav>
   {content}
  </div>
 )
}




export default App;