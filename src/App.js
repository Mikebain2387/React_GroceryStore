import React, {useState} from 'react';
import products from './components/data';
import ProductList from './components/ProductList';

function App(){
const [cart, setCart]=useState([]);
const [currentPage, setCurrentPage] = useState('products');


let content;
if(currentPage ==='products'){
 content = <ProductList products={products} addToCart={addToCart} />;
}
else if(currentPage === 'cart'{
 content = <{ProductList products = {products}}
})


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