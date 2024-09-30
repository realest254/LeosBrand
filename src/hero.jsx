import React, { useState, useEffect } from 'react';
import image1 from './images/LEOSnew.png';
import { Link } from 'react-router-dom';
import './homepage.css';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image1;
    img.onload = () => setImageLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      <div className={`hero-content ${imageLoaded ? 'loaded' : ''}`}>
        <div
          className="hero-text"
        >
          <h1>Your Brand Name</h1>
          <p className="tagline">Redefining style, one thread at a time</p>
          <p className="description">Discover our unique collection of African-inspired clothing designed for the modern trendsetter.</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
        <div className="hero-image">
          <img
            src={image1}
            alt="T-shirt"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
