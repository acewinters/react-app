import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const roundToTwoDecimalPlaces = (num) => {
  return parseFloat(num.toFixed(2));
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].price = roundToTwoDecimalPlaces(updatedCart[existingItemIndex].price);
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1, price: roundToTwoDecimalPlaces(item.price) }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity = newQuantity;

      if (updatedCart[itemIndex].quantity <= 0) {
        updatedCart.splice(itemIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
