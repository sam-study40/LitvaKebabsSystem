import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, placeOrder } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handlePlaceOrder = () => {
    // Implement logic to place the order (e.g., send order to the server)
    placeOrder();
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <div>
        <Link to="/">Go to Menu</Link>
        <Link to="/edit-menu">Edit Menu</Link>
      </div>
    </div>
  );
};

export default Cart;
