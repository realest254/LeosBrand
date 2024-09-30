import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="brand">YOUR BRAND</div>
        <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <li><Link to="/home" onClick={toggleNav}>Home</Link></li>
          <li><Link to="/shop" onClick={toggleNav}>Shop</Link></li>
          <li><Link to="/about" onClick={toggleNav}>About</Link></li>
          <li><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
        </ul>
        <button className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;