import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import CartPage from './components/CartPage';
import LoginForm from './components/LoginForm';
import Promotion from './components/Promotion';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: 399,
    description: 'A nice smartphone',
    image: 'hp.jpg'
  },
  {
    id: 2,
    name: 'Laptop',
    price: 999,
    description: 'Powerful laptop for work and gaming',
    image: 'laptop.jpg'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 199,
    description: 'High quality headphones for music lovers',
    image: 'headsphone.jpg'
  }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { product: product, quantity: 1 }]);
    }
  }

  const removeFromCart = (itemToRemove) => {
    const updatedItems = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedItems);
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Penjualan Produk</Link>
            </li>
            <li>
              <Link to="/contact">Kontak</Link>
            </li>
            <li>
              {isLoggedIn ? (
                <>
                  <Link to="/cart">Keranjang</Link>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>

        {/* Routes for main content */}
        <Routes>
          <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/" element={<Promotion />} />

          {/* Route for Login Form */}
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
