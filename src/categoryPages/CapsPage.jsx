import React from 'react';
import './categoryPage.css'; // Import your CSS for styling

import c1 from '../capImages/c1.jpeg';
import c2 from'../capImages/c2.jpeg';
import c3 from'../capImages/c3.jpeg';
import c4 from'../capImages/c4.jpeg';

const capImages = [c1, c2, c3, c4];

function Caps() {
  return (
    <section className="category-page">
      <h2 className="category-title">Caps</h2>
      <div className="card-container">
        {capImages.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Cap ${index + 1}`} loading='lazy'/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Caps;
