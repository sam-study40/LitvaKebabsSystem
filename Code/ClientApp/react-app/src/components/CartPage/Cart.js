import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            {/* Need to add quantity and remove item functionality here */}
          </li>
        ))}
      </ul>
      {/* Need to add "Place Order" button or functionality here */}
      {/* Need to add Navigation Links here */}
      <div>
        <Link to="/">Go to Menu</Link>
        <Link to="/edit-menu">Edit Menu</Link>
      </div>
    </div>
  );
};

export default Cart;
