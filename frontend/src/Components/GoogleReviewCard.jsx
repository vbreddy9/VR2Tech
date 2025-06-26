import React, { useEffect, useState } from 'react';
import './GoogleReviewCard.css';
import g from '../assets/g.webp';

const reviews = [
  { stars: '★★★★★', text: 'Good Support 24/7', date: '01/11/25', name: 'British Elderly care' },
  { stars: '★★★★★', text: 'Excellent experience we have', date: '12/10/25', name: 'Landrise Team' },
  { stars: '★★★★☆', text: 'Great service, quick and professional.', date: '05/09/25', name: 'Sujay Infra' },
  { stars: '★★★★★', text: 'Fixed our webpage. Thanks!', date: '27/08/25', name: 'Vidhyavaaradhi' },
];

const GoogleReviewCard = () => {
  const [index, setIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const displayTimer = setTimeout(() => setShowCard(true), 5000);
    const reviewTimer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => {
      clearTimeout(displayTimer);
      clearInterval(reviewTimer);
    };
  }, []);

  const handleClose = () => {
    setShowCard(false);
    setClosed(true);
    setTimeout(() => {
      setShowCard(true);
    }, 10000); // Reappear after 10 seconds
  };

  const { stars, text, date, name } = reviews[index];

  return (
    showCard && !closed && (
      <div className="google-review-card">
        <button className="close-button" onClick={handleClose}>×</button>
        <img src={g} alt="Google Logo" className="google-logo" />
        <div>
          <div className="stars">{stars}</div>
          <div className="review-text">{text}</div>
          <div className="review-date">{date}</div>
          <div className="review-name">- {name}</div>
        </div>
      </div>
    )
  );
};

export default GoogleReviewCard;
