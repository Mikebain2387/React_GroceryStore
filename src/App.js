import React, {useState} from 'react';
import products from './components/data';
import ProductList from './components/ProductList';
import Cart from './components/cart'

import './styles.css'

function App(){
const [cart, setCart]=useState([]);
const [currentPage, setCurrentPage] = useState('products');


const addToCart = (product) => {
 setCart((prevCart) => {
  const itemExists = prevCart.find ((item) => item.id === product.id);
  if(itemExists) {
   return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item 
  );
   
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
   <nav className="navbar">
    <div className="container-fluid">
     <a className='navbar-brand' href="#">Bain's Fresh Market</a>
     <ul className="navbar-nav ms-auto">
      <li className="nav-item">
       <button className="btn btn-link nav-link" onClick={()=> setCurrentPage('products')}>Products</button>
      </li>
      <li className="nav-item">
       <button className="btn btn-link nav-link" onClick={() =>setCurrentPage('cart')}>CArt ({cart.reduce((total,item) => total + item.quantiny, 0)})</button>
      </li>
     </ul>
    </div>
   </nav>
   {content}
  </div>
 )
}




export default App;