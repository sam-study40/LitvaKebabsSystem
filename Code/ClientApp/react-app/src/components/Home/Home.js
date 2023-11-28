// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Cart from './Cart';
import Home from './Home';

const Home = () => (
  <div style={{ textAlign: 'center' }} className="App">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
    <h1>Welcome to Litva Kebabs!</h1>
    {/* Other content for the home page */}
  </div>
);

export default Home;
