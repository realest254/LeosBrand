import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Redefining fashion with a touch of African culture and modern trends.</p>
      </section>

      <section className="about-content">
        <div className="about-intro">
          <h2>Our Story</h2>
          <p>
            Founded by Leo Mupedzi, our brand is inspired by the rich diversity and deep heritage of African art, 
            culture, and style. What started as a small passion project to incorporate African elements into contemporary 
            clothing has grown into a full-fledged fashion movement, known for unique designs and prints. 
          </p>
        </div>

        <div className="about-values">
          <h2>What We Stand For</h2>
          <ul>
            <li><span className="highlight">Cultural Pride:</span> Every piece reflects the beauty and diversity of Africa.</li>
            <li><span className="highlight">Quality:</span> We use high-quality fabrics to ensure our designs feel as good as they look.</li>
            <li><span className="highlight">Sustainability:</span> Our fabrics are sourced sustainably and we are committed to ethical production.</li>
            <li><span className="highlight">Innovation:</span> We blend traditional and modern design to create fashion-forward pieces.</li>
          </ul>
        </div>

        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            We aim to create a global movement that celebrates African creativity through fashion. 
            From everyday wear to statement pieces, our clothes are for the bold, the expressive, and the proud. 
            Our dream is to see African-inspired designs embraced in wardrobes across the world.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
