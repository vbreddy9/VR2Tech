import { Container, Row, Col, Card } from 'react-bootstrap';
import { faGlobe, faCogs, faMobileAlt, faUsers, faLock, faPlug } from '@fortawesome/free-solid-svg-icons';

function IconRow() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="text-center">
              <FontAwesomeIcon icon={faGlobe} size="3x" />
              <Card.Title>Title 1</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="text-center">
              <FontAwesomeIcon icon={faCogs} size="3x" />
              <Card.Title>Title 2</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="text-center">
              <FontAwesomeIcon icon={faMobileAlt} size="3x" />
              <Card.Title>Title 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="text-center">
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <Card.Title>Title 4</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IconRow;
