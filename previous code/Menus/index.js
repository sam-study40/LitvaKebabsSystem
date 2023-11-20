// Function to fetch and display the menu items
async function fetchMenu() {
    try {
        // Fetch menu data from the API endpoint
        const response = await fetch('http://localhost:5000/api/menu');
        
        // Parse the JSON data
        const menuData = await response.json();

        // Process menuData and update your HTML accordingly
        console.log(menuData);
        
        // Example: Display menu items in the console
        menuData.forEach(item => {
            console.log(`${item.name} - $${item.price}`);
        });
    } catch (error) {
        // Handle errors during the fetch operation
        console.error('Error fetching menu:', error);
    }
}

// Function to add an item to the cart
async function addToCart(itemId, itemName, itemPrice) {
    try {
        // Prepare the order item
        const orderItem = {
            menuItemId: itemId,
            quantity: 1 // You can have a quantity input in your UI
        };

        // Send the order item to the backend API
        const response = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderItem)
        });

        // Check if the request was successful
        if (response.ok) {
            // Log a success message
            console.log('Order placed successfully!');
            
            // Example: Display the added item in the console
            console.log(`Added to Cart: ${itemName} - $${itemPrice}`);
        } else {
            // Log an error message if the request was not successful
            console.error('Failed to place order:', response.status, response.statusText);
        }
    } catch (error) {
        // Handle errors during the order placement operation
        console.error('Error placing order:', error);
    }
}

// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display the menu items
    fetchMenu();
});
