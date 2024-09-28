import React from 'react';
import './categoryPage.css'; // Import your CSS for styling
import t1 from '../t-shirtImages/t1.jpeg';
import t2 from'../t-shirtImages/t2.jpeg';
import t3 from'../t-shirtImages/t3.jpeg';
import t4 from'../t-shirtImages/t4.jpeg';
import t5 from'../t-shirtImages/t5.jpeg';
import t6 from'../t-shirtImages/t6.jpeg';
import t7 from'../t-shirtImages/t7.jpeg';
import t8 from'../t-shirtImages/t8.jpeg';
import t9 from'../t-shirtImages/t9.jpeg';
import t10 from'../t-shirtImages/t10.jpeg';
const tshirtImages = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];

function TShirts() {
  return (
    <section className="category-page">
      <h2 className="category-title">T-Shirts</h2>
      <div className="card-container">
        {tshirtImages.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`T-Shirt ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TShirts;
