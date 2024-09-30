import React, { useState, useEffect, useCallback } from 'react';
import './shopPage.css'; // Custom CSS for styling

const ShopPage = () => {
  const fullText = "We value personalized experiences, which is why we've chosen WhatsApp Business for your orders. Simply select your design, color, and size from the gallery, and chat directly with us to complete your order!";
  const words = fullText.split(' ');

  const [displayText, setDisplayText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const addWord = useCallback(() => {
    if (currentIndex < words.length) {
      setDisplayText(prevText => [...prevText, words[currentIndex]]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setShowButton(true);
    }
  }, [currentIndex, words]);

  useEffect(() => {
    const intervalId = setInterval(addWord, 200); // Controls the speed of word appearance

    return () => clearInterval(intervalId);
  }, [addWord]);

  return (
    <div className="shop-container">
      <section className="shop-message-section">
        <div className="shop-message">
          {displayText.map((word, index) => (
            <React.Fragment key={index}>
              <span className="magic-word">
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="magic-letter">{char}</span>
                ))}
              </span>
              {index < displayText.length - 1 && <span className="space"> </span>}
            </React.Fragment>
          ))}
        </div>
        
        {showButton && (
          <a
            href="https://wa.me/whatsappnumber?text=I%20want%20to%20order%20a%20custom%20shirt"
            className="shop-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Order
          </a>
        )}
      </section>

      <section className="shop-instructions">
        <h2>How to Place an Order</h2>
        <ul>
          <li>1. Browse through our gallery of designs.</li>
          <li>2. Pick your preferred design, color, and size.</li>
          <li>3. Once you've made your choice, click the button to chat with us on WhatsApp.</li>
          <li>4. In the message, include your chosen design, size, and color (e.g., "I'd like a red hoodie, size M, with design A.").</li>
          <li>5. Complete the payment via our secure platform, and we'll handle the printing and delivery.</li>
        </ul>
      </section>
    </div>
  );
}

export default ShopPage;