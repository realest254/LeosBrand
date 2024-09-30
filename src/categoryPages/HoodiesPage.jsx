import React from 'react';
import './categoryPage.css'; // Import your CSS for styling

import h10 from '../hoodImages/h10.jpg';
import h11 from'../hoodImages/h11.jpg';
import h12 from'../hoodImages/h12.jpg';
import h1 from'../hoodImages/h1.jpeg';
import h3 from'../hoodImages/h3.jpeg';
import h4 from'../hoodImages/h4.jpg';
import h6 from'../hoodImages/h6.jpg';
import h7 from'../hoodImages/h7.jpeg';
import h9 from'../hoodImages/h9.jpeg';
const hoodieImages = [h10, h11, h12, h1, h3, h4, h6, h7, h9];


function Hoodies() {
  return (
    <section className="category-page">
      <h2 className="category-title">Hoodies</h2>
      <div className="card-container">
        {hoodieImages.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Hoodie ${index + 1}`} loading='lazy' />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hoodies;
