import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';  // Adjust the import path as needed

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')  // Adjust the id based on your HTML structure
);
