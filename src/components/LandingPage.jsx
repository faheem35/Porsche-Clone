import React from 'react';
import '../LandingPage.css'; // Import the CSS file for custom styles
import { Container, Navbar, Nav, Row, Col, Button, Stack } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <>
      <Container fluid className="landing-page min-vh-100 d-flex flex-column pb-5">
        {/* Navbar */}
        <Navbar expand="lg" bg="transparent" variant="dark" className="mb-auto">
          <Container fluid className="d-flex justify-content-between align-items-center">
            <Nav>
              <Nav.Link href="#home" className='text-white'>
                <i className="fa-solid fa-bars "></i> Menu
              </Nav.Link>
            </Nav>
            <Navbar.Brand className="mx-auto fs-3">PORSCHE</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Content */}
        <Container fluid className="d-flex flex-column justify-content-end pb-5">
          <Row className="text-center">
            <Col xs={12} md={6} className="text-white ms-md-5 ps-md-5 text-start">
              <h1 className="display-1 display-sm-2 display-md-3 display-lg-4 display-xl-5" style={{ lineHeight: '1.2' }}>
                The one and <br /> always.
              </h1>
              <Button 
                variant="outline-light" 
                className="mt-3 mb-5 text-white border-white btn-lg">
                Discover the new 911 Carrera S
              </Button>
            </Col>

            <Col 
              xs={12} 
              md={6} 
              className="d-flex justify-content-end align-items-end "
              style={{ height: '100%' }}
            >
              <div className="position-absolute" style={{ bottom: '20px', right: '20px' }}>
                <i className="fa-brands fa-rocketchat text-white" style={{ fontSize: "2rem" }}></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default LandingPage;
