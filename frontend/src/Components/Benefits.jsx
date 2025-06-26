import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import './Benefits.css';

function Benefits({ benefitsData }) {
  return (
    <div className="container">
      
      <Row>
        {benefitsData.map((benefit, index) => (
          <Col key={index} md={3}>
            <div className="benefit d-flex flex-column align-items-center">
              <div className="icon">
                <FontAwesomeIcon icon={benefit.icon} className="fa-4x" style={{ marginRight: '10px', color: 'brown' }} />
              </div>
              <div className="text-center">
                <h5 className="title">{benefit.title}</h5>
                <p className="description">{benefit.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Benefits;
