// MenuApp.js
import React, { useEffect, useState } from 'react';

const MenuApp = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [drinkMenu, setDrinkMenu] = useState([]);

  useEffect(() => {
    // Update the fetch path to match the correct URL
    fetch('/menu.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setFoodMenu(data.food);
    setDrinkMenu(data.drinks);
  })
  .catch(error => console.error('Error fetching menu data:', error));

  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <select id="foodChoice">
        {foodMenu.map(item => (
          <option key={item.name} value={item.name} data-price={item.price}>
            {item.name}
          </option>
        ))}
      </select>

      <select id="drinkChoice">
        {drinkMenu.map(item => (
          <option key={item.name} value={item.name} data-price={item.price}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MenuApp;
