// Menu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuService from './path-to-your-MenuService';
import { useCart } from './CartContext';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const menuService = new MenuService();
    const fetchData = async () => {
      try {
        const data = await menuService.GetAllMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Menu;
