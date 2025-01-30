import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure your App.jsx is in the src folder

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
