// src/components/CartPage.js
import React from 'react';
import './CartPage.css'; 


const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="CartPage">
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang belanja Anda kosong.</p>
      ) : (
        <div className="product-list">
          {cartItems.map(item => (
            <div key={item.product.id} className="product">
              <h3>{item.product.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.product.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
