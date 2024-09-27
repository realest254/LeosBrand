import React from 'react';
import { Link } from 'react-router-dom';
import './carouselSection.css'; // Importing the CSS for styling

// Importing images
import image1 from './images/carslres1.jpg';
import image2 from './images/carslres1.jpg';
import image3 from './images/carslres1.jpg';
import image4 from './images/carslres1.jpg';
import image5 from './images/carslres1.jpg';

const images = [image1, image2, image3, image4, image5]; // Original images
const extendedImages = [...images, ...images, ...images]; // Duplicate images for continuous effect

const Carousel = () => {
  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Latest Collection</h2>
      <div className="carousel">
        <div className="carousel-wrapper">
          {extendedImages.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Carousel Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
