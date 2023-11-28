import React from 'react';
import ReactDOM from 'react-dom';
import MenuApp from './MenuApp';
import './index.css';
import { CartProvider } from './context/CartContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <MenuApp />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuApp />
  </React.StrictMode>
);



// For measuring performance
reportWebVitals();
