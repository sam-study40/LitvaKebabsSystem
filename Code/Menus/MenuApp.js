/*
document.addEventListener('DOMContentLoaded', function() {
    const foodChoice = document.getElementById('foodChoice');
    const drinkChoice = document.getElementById('drinkChoice');
    
    // Fetch menu data from your JSON file using an HTTP request (e.g., fetch API)
    fetch('/menu.json')
        .then(response => response.json())
        .then(data => {
            const foodMenu = data.food;
            const drinkMenu = data.drinks;

            // Populate the food dropdown list
            foodMenu.forEach(item => {
                const option = document.createElement('option');
                option.value = item.name;
                option.textContent = item.name;
                option.dataset.price = item.price;
                foodChoice.appendChild(option);
            });

            // Populate the drink dropdown list
            drinkMenu.forEach(item => {
                const option = document.createElement('option');
                option.value = item.name;
                option.textContent = item.name;
                option.dataset.price = item.price;
                drinkChoice.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching menu data:', error));
});
*/

// MenuApp.js
import React, { useEffect, useState } from 'react';

const MenuApp = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [drinkMenu, setDrinkMenu] = useState([]);

  useEffect(() => {
    // Fetch menu data from the Node.js server
    fetch('http://localhost:5000/menu.json')  // Assuming your Node.js server is running on port 5000
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
