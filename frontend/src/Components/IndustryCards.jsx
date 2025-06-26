import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IndustryCards.css'


const IndustryCards = ({ cards }) => {
  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Col xs={12} sm={6} md={3} key={index}>
            <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={card.icon} size="3x" style={{ marginRight: '10px', color: 'brown' }} />
                <div className="mt-4"></div>
                <Card.Title>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IndustryCards;
