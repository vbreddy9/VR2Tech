import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faCircle } from '@fortawesome/free-solid-svg-icons';
import './ImageWithDetails.css';

const ImageWithDetails = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="main-details">
      <div className="details">
        {data.map((item, index) => (
          <div
            key={index}
            className={`detail ${index === hoveredIndex ? 'active' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className="icon-heading">
              <FontAwesomeIcon
                icon={index === 0 ? faStar : index === 1 ? faHeart : faCircle}
                className="icon"
              />
              <h2>{item.heading}</h2>
            </div>
            <p>{item.description}</p>
            
          </div>
        ))}
      </div>
      <div className="image">
        <img src={data[hoveredIndex].image} alt={data[hoveredIndex].heading} />
      </div>
    </div>
  );
};

export default ImageWithDetails;
