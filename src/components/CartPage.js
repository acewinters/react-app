import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../App.css';

const CartPage = () => {
  const { cart, removeFromCart, updateItemQuantity } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity)) {
      updateItemQuantity(itemId, newQuantity);
    }
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.06;
  const totalCost = subtotal + tax;

  return (
    <div className="container cart-container">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={{ color: 'black', textShadow: '0px 0px 1px black' }}>
                    {item.name}
                  </td>
                  <td style={{ color: 'black', textShadow: '0px 0px 1px black' }}>
                    ${item.price.toFixed(2)}
                  </td>
                  <td style={{ color: 'black', textShadow: '0px 0px 1px black' }}>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => handleQuantityChange(event, item.id)}
                      style={{ width: '60px', color: 'black', textShadow: '0px 0px 1px black' }}
                    />
                  </td>
                  <td style={{ color: 'black', textShadow: '0px 0px 1px black' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="totals-container">
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <br />
            <h4>Tax (6%): ${tax.toFixed(2)}</h4>
            <br />
            <h4>Total Cost: ${totalCost.toFixed(2)}</h4>
            <br />
            <Link to="/checkout" className="btn btn-primary proceed-to-checkout">
              Proceed to Checkout
            </Link>
          </div>
        </>
      ) : (
        <div className="empty-cart-message">
          <p>Your cart is currently empty.</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
