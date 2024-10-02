import React from 'react';
import './carouselSection.css';

// Importing images
import image1 from './images/carslres1.jpg';
import image2 from './images/yellowHD1.jpg';
import image3 from './images/redT1.jpg';
import image5 from './images/cap2.jpg';
import image6 from './images/yellowHD2.jpg';
import image7 from './images/greenT1.jpg';
import image8 from './images/redT2.jpg';
import image9 from './images/greenT2.jpg';
import image10 from './images/yellowHD3.jpg';
import image11 from './images/Hood4.jpg';
import image12 from './images/greenT3.jpg';
import image13 from './images/cap3.jpg';

// Carousel images array
const images = [
  image1, image2, image3, image5, image6,
  image7, image8, image9, image10, image11,
  image12, image13
];

const Carousel = () => {
  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Latest Collection</h2>
      <div className="carousel">
        <div className="carousel-wrapper">
          {/* Original set of images */}
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Collection Item ${index + 1}`} />
            </div>
          ))}
          {/* First duplicate set */}
          {images.map((image, index) => (
            <div className="carousel-item" key={`clone1-${index}`}>
              <img src={image} alt={`Collection Item ${index + 1}`} />
            </div>
          ))}
          {/* Second duplicate set for extra smoothness */}
          {images.map((image, index) => (
            <div className="carousel-item" key={`clone2-${index}`}>
              <img src={image} alt={`Collection Item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;