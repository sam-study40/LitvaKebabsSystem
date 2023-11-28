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
