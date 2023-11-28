import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EditMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Need to write fetch menu data from MenuService here
    // Need to write command to update the state with menu data
  }, []);

  return (
    <div>
      <h1>Edit Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            {/* Need to add edit and delete functionality */}
          </li>
        ))}
      </ul>
      {/* Need to add navigation Links */}
      <div>
        <Link to="/">Go to Menu</Link>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
};

export default EditMenu;
