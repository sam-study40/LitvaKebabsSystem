import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import MenuApp from './MenuApp';
import './index.css';
import { CartProvider } from './context/CartContext';
import reportWebVitals from './reportWebVitals';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <MenuApp />
    </CartProvider>
  </React.StrictMode>
);

// For measuring performance
reportWebVitals();
