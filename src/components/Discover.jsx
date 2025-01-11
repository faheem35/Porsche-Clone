import React from 'react';
import "../Discover.css";
import { Card, Col, Container, Row } from 'react-bootstrap';

const Discover = () => {
  return (
    <Container className="mb-5 pb-5">
      <h3 className="text-center my-5 text-black">Discover</h3>

      <Row>
        <Col xs={12} md={4}>
          <Card className="discoverCard-1" style={{ height: "23rem" }}>
            <Card.Body className="d-flex flex-column justify-content-end text-white">
              <Card.Text className="d-flex justify-content-between">
                The Macan.
                <i className="fa-solid fa-right-long"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="discoverCard-2" style={{ height: "23rem" }}>
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Text className="d-flex justify-content-between text-white">
                The 2025 Competition is on.
                <i className="fa-solid fa-right-long"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="discoverCard-3" style={{ height: "23rem" }}>
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Text className="d-flex justify-content-between text-white">
                The Taycan.
                <i className="fa-solid fa-right-long"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Discover;
