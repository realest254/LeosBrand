import React from 'react';
import { Link } from 'react-router-dom';
import './categorySection.css';
import image2 from './images/LEOSnew.png'; 
import category2 from './images/category1.jpg';

function CategorySection() {
  return (
    <section className="category-container">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-card-container">
        <Link to="/tshirts" className="category-item">
          <img src={image2} alt="T-Shirts" />
          <div className="category-card-content">
            <h3>T-Shirts</h3>
            <p className="category-item-description">Explore our exclusive range of T-shirts that blend style with comfort.</p>
          </div>
        </Link>
        <Link to="/hoodies" className="category-item">
          <img src={category2} alt="Hoodies" />
          <div className="category-card-content">
            <h3>Hoodies</h3>
            <p className="category-item-description">Stay warm and stylish with our premium collection of hoodies.</p>
          </div>
        </Link>
        <Link to="/caps" className="category-item">
          <img src={image2} alt="Caps" />
          <div className="category-card-content">
            <h3>Caps</h3>
            <p className="category-item-description">Top off your look with our trendy caps, perfect for any occasion.</p>
          </div>
        </Link>
      </div>
      <Link to="/shop" className="category-cta-button">Shop All</Link>
    </section>
  );
}

export default CategorySection;
