import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';

const Invoice = ({ billingDetails }) => {
  const { cart } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.06;
  const totalCost = subtotal + tax;

  return (
    <div className="container invoice-container">
      <h1 className="center-text">Invoice</h1>
      <h3>Billing Details</h3>
      <div>Name: {billingDetails.fullName}</div>
      <div>Email: {billingDetails.email}</div>
      <div>Address: {billingDetails.address}</div>
      <div>City: {billingDetails.city}</div>
      <div>State: {billingDetails.state}</div>
      <div>Zip: {billingDetails.zip}</div>
      <h3>Cart Items</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <h4>Tax (6%): ${tax.toFixed(2)}</h4>
      <h4>Total Cost: ${totalCost.toFixed(2)}</h4>
    </div>
  );
};

export default Invoice;
