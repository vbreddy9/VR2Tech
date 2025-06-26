import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pricing.css'; // Import the custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import a solid icon for the bullet points
import Popup from './Popup'; // Import the Popup component

const Pricing = ({ plans }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowPopup(true);
  };

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price * (1 - discount / 100);
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="container my-5">
      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 pricing-card position-relative">
              {plan.popular && <div className="popular-ribbon">Popular</div>}
              <div className={`card-header text-center ${plan.headerColor} text-white`}>
                {plan.title}
              </div>
              <div className="card-body">
                {plan.title === "Enterprise" ? (
                  <p className="card-text text-secondary text-center">
                    Contact Us
                  </p>
                ) : (
                  <p className="card-text text-secondary text-center">
                    <span className="price-container">
                      <span className="original-price">₹{plan.price}</span> {/* Display original price */}
                      <span className="discounted-price">1 year @ ₹{calculateDiscountedPrice(plan.price, plan.discount)}</span> {/* Display discounted price */}
                    </span>
                    <span className="save-text">Save {plan.discount}% </span> {/* Display save percentage */}
                  </p>
                )}
                <ul className="list-unstyled text-left">
                  {plan.details.map((detail, idx) => (
                    <li key={idx}><FontAwesomeIcon icon={faCheckCircle} className="bullet-icon" /> {detail}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="btn btn-primary" onClick={() => handleSelectPlan(plan.title)}>Select your plan</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <Popup plan={selectedPlan} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Pricing;