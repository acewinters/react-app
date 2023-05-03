import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand custom-navbar-brand" to="/">
          <span className="white-text">Electriconica Emporium</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/cart">
                Cart
                <i className="fas fa-shopping-cart"></i>
                <span className="badge badge-light">{totalItems}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/checkout">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
