import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/cart';
import Checkout from './components/Checkout';
import './styles.css';

import appleImage from './images/apples-805124_1920-removebg-preview.png';
import breadImage from './images/bread_original-removebg-preview.png';
import milkImage from './images/milk-2688466_1280-removebg-preview.png';
import eggsImage from './images/eggs_original-removebg-preview.png';
import carrotImage from './images/carrots_original-removebg-preview.png';
import chickenBreastImage from './images/chicken-breast-original-removebg-preview.png';
import orangeJuiceImage from './images/orange-2610760-removebg-preview.png';
import riceImage from './images/RICE__original-removebg-preview.png';
import peanutButterImage from './images/peanutbutter_original-removebg-preview.png';
import oliveOilImage from './images/oliveoil_original-removebg-preview.png';
import bananaImage from './images/banana_original-removebg-preview.png';
import tomatoSauceImage from './images/tomatosauce_original-removebg-preview.png';

const imageMap = {
  apple: appleImage,
  bread: breadImage,
  milk: milkImage,
  eggs: eggsImage,
  carrot: carrotImage,
  "chicken breast": chickenBreastImage,
  "orange juice": orangeJuiceImage,
  rice: riceImage,
  "peanut butter": peanutButterImage,
  "olive oil": oliveOilImage,
  banana: bananaImage,
  "tomato sauce": tomatoSauceImage,
};



function App() {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [cart, setCart] = useState([]); // State to hold cart items

  // Track current page
  const [currentPage, setCurrentPage] = useState('products');

  // Fetch data from API
  useEffect(() => {
    console.log('Fetching products from the API...');
    fetch('http://localhost:4001/api/items')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('API Response:', data); // Log raw response from the API

        const updatedData = data.map((product) => {
          console.log('Product from API:', product); // Log each product from the API

          const normalizedName = product.item_name?.trim().toLowerCase(); // Normalize name
          const imageURL = imageMap[normalizedName];

          console.log('Processing product:', product.item_name); // Log product name
          console.log('Mapped image URL:', imageURL); // Log image URL
          console.log('Category:', product.category_name); // Log category field

          return {
            ...product,
            image: imageURL || './images/fallback.png', // Fallback image
          };
        });

        console.log('Mapped data after processing:', updatedData); // Log final data
        setProducts(updatedData);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product is already in the cart
      const itemExists = prevCart.find((item) => item.item_id === product.item_id);
      if (itemExists) {
        // If it exists, add to the quantity +1
        return prevCart.map((item) =>
          item.item_id === product.item_id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it does not exist, add it to the cart with quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  let content;

  if (currentPage === 'products') {
    content = <ProductList products={products} addToCart={addToCart} />;
  } else if (currentPage === 'cart') {
    content = <Cart cart={cart} updateCart={setCart} checkout={() => setCurrentPage('checkout')} />;
  } else if (currentPage === 'checkout') {
    content = <Checkout />;
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bain's Fresh Market
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item link">
              <button className="btn btn-link nav-link" onClick={() => setCurrentPage('products')}>
                Products
              </button>
            </li>
            <li className="nav-item link">
              <button className="btn btn-link nav-link" onClick={() => setCurrentPage('cart')}>
                Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {content}
    </div>
  );
}

export default App;
