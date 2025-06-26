import React from 'react';
import './AboutPage.css';

function AboutPage ({ number, title, text, bulletPoints, imageUrl, altText }) {
  
  return (
    <div className='container about'>
      <div className="about-left">
        <p className="about_number">{number}</p>
        <h2 className="about_title">{title}</h2>
        <p className="about_text">{text}</p>
        <div>
          <ul className="bullet-list">
            {Array.isArray(bulletPoints) && bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about-right">
        <img src={imageUrl} alt={altText} className='about-img' />
      </div>
    </div>
  );
}

export default AboutPage;
