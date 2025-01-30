import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      

      {/* Define Routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
      </Routes>
    </div>
  )
}

export default App
