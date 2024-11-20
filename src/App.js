import React, {useState} from 'react';
import products from './components/data';
import ProductList from './components/ProductList';

function App(){
const [cart, setCart]=useState([]);
const [currentPage, setCurrentPage] = useState('products');


 return(
  <div className="container">
   <nav className="navbar">
    <div className="container-fluid">
     <a className='navbar-brand' href="#">Bain's Fresh Market</a>
     <ul className="navbar-nav ms-auto">
      <li className="nav-item">
       <button className="btn btn-link nav-link" onClick={()=> setCurrentPage('products')}>Products</button>
      </li>
     </ul>
    </div>
   </nav>
  </div>
 )
}




export default App;