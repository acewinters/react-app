import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';
import CheckoutPage from './components/CheckoutPage';


function App() {
  return (
    <CartProvider>
      <Router basename="/react-app">
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
