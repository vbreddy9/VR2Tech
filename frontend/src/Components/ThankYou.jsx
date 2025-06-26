import React from 'react';
import './ThankYou.css';
import withSEO from '../HOC/withSEO';

function ThankYou() {
  return (
      <div className="thank-you-container">
          <h1>Thank You!</h1>
          <p>Your message has been successfully sent. We appreciate your interest.</p>
          <p>We will get back to you shortly!</p>
          <a href="/" className="home-link">Back to Home</a>
      </div>
  );
}

export default withSEO(ThankYou, 'Thank You | VR2 Technologies')
