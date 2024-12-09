import React, {useState, useEffect} from 'react';
// import products from './components/data';
import ProductList from './components/ProductList';
import Cart from './components/cart'
import Checkout from './components/Checkout';
import './styles.css'

import apple from "../src/images/apples-805124_1920-removebg-preview.png"
import bread from "../src/images/bread_original-removebg-preview.png"
import milk from "../src/images/milk-2688466_1280-removebg-preview.png"
import eggs from "../src/images/eggs_original-removebg-preview.png"
import carrot from "../src/images/carrots_original-removebg-preview.png"
import chicken from "../src/images/chicken-breast-original-removebg-preview.png"
import orange from "../src/images/orange-2610760-removebg-preview.png"
import rice from "../src/images/RICE__original-removebg-preview.png"
import peanut from "../src/images/peanutbutter_original-removebg-preview.png"
import olive from "../src/images/oliveoil_original-removebg-preview.png"
import banana from "../src/images/banana_original-removebg-preview.png"
import tomato from "../src/images/tomatosauce_original-removebg-preview.png"


const imageMap = {
 Apple: apple,
 Bread: bread,
 Milk: milk,
 Eggs: eggs,
 Carrots: carrot,
 "Chicken Breast": chicken,
 "Orange Juice": orange,
 Rice: rice,
 "Peanut Butter": peanut,
 "Olive Oil": olive,
 Bananas: banana,
 "Tomato Sauce": tomato,
};


function App(){
 const [products, setProducts] = useState([]); // State to hold fetched products
const [cart, setCart]=useState([]); //state to hold cart items

//track current page
const [currentPage, setCurrentPage] = useState('products');

//fetch data from API 
useEffect(()=> {
 fetch('http://localhost:4001/api/items')
 .then((res) => {
  if (!res.ok){
   throw new Error(`HTTP error! status : ${res.status}`);
  }
  return res.json();
 } 
)
 .then((data) => {
  console.log('Fetched data:', data)
  const updatedData = data.map((product) =>({
   ...product,
    image: imageMap[product.name],

  }));
  setProducts(updatedData);
 })
 .catch((err) => console.error('FAiled to fetch products:', err));
})

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