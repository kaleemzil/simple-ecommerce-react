import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
