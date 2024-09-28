import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <nav className="nav-container">
        <div className="brand">YOUR BRAND</div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-icons">
          <span className="icon">🛒</span>
          <span className="icon">👤</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
