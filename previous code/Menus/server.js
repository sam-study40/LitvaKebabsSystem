const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // Required for reading the JSON file
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Read menu data from the JSON file
const menuData = JSON.parse(fs.readFileSync('menu.json'));

app.get('/', (req, res) => {
    res.sendFile(__d + '/public/index.html');
});

app.post('/order', (req, res) => {
    // ... (your order processing logic)

    res.send(`<h2>Your Order:</h2>
        <p>Item: ${itemName}</p>
        <p>Price: $${itemPrice}</p>
        <p>Quantity: ${quantity}</p>
        <p>Total Price: $${totalAmount}`);
});

// Define a default route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/menu.json', (req, res) => {
    // Serve the menu.json file
    res.sendFile(path.join(__dirname, 'apprenticeship-2023-sd-hci', 'menu.json'));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});