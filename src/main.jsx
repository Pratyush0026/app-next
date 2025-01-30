import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom' // Importing BrowserRouter for routing
import './index.css' // Your CSS file
import App from './App' // Your App component

// Rendering the App component inside the Router
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <App />
  </Router>
)
