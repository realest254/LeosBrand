import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './homepage';
import Footer from './footer';
import Header from './header'; 
import TShirtsPage from './categoryPages/TShirtsPage'; 
import HoodiesPage from './categoryPages/HoodiesPage'; 
import CapsPage from './categoryPages/CapsPage'; 
import About from './about'; // Import your About page
import Contact from './contact'; // Import your Contact page
import ShopPage from './shopPage'; // Import the Shop page

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tshirts" element={<TShirtsPage />} />
          <Route path="/hoodies" element={<HoodiesPage />} />
          <Route path="/caps" element={<CapsPage />} />
          <Route path="/about" element={<About />} /> {/* Route for About page */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
          <Route path="/shop" element={<ShopPage />} /> {/* Route for Shop page */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
