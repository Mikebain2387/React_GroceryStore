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
    </div>
   </nav>
  </div>
 )
}




export default App;