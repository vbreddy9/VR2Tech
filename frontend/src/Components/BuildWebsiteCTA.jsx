import React from 'react';
import './BuildWebsiteCTA.css'; // Import CSS file for styling

const BuildWebsiteCTA = ({ title }) => {
  const mobileNumber = '+918309436998'; // Replace with your mobile number

  const handleCall = () => {
    window.location.href = `tel:${mobileNumber}`;
  };

  return (
    <div className="cta-container">
      <h2>{title}</h2>
      <button className="cta-button" onClick={handleCall}>BOOK AN APPOINTMENT TODAY!</button>
    </div>
  );
};

export default BuildWebsiteCTA;
