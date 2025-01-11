import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='bg-black text-white min-vh-100 p-5'>
      <h5>Current Region / Language</h5>
      <div className="d-flex mt-3">
        <p className="mb-0 me-3">India / English</p>
        <Button variant="link" className="p-0 text-white">Change</Button>
      </div>

      <Row className='mt-5'>
        <Col xs={12} md={4}>
          <h5>Newsletter</h5>
          <p>Latest news directly in your inbox</p>
          <Button variant="light bg-white text-black" className='px-5'>Subscribe</Button>
        </Col>

        <Col xs={12} md={4}>
          <h5>Contact</h5>
          <p>Do you have any questions?</p>
          <Button variant="light bg-white text-black" className='px-5'>Contact Form</Button>
        </Col>

        <Col xs={12} md={4}>
          <h5>Follow Us</h5>
          <div className="d-flex align-items-center flex-wrap">
            <Button variant="light bg-white text-black" className="me-3 p-3">
              <i className="fa-brands fa-instagram"></i>
            </Button>
            <Button variant="light bg-white text-black" className="me-3 p-3">
              <i className="fa-brands fa-facebook"></i>
            </Button>
            <Button variant="light bg-white text-black" className="me-3 p-3">
              <i className="fa-brands fa-twitter"></i>
            </Button>
            <Button variant="light bg-white text-black" className="me-3 p-3">
              <i className="fa-brands fa-pinterest-p"></i>
            </Button>
            <Button variant="light bg-white text-black" className="me-3 p-3">
              <i className="fa-brands fa-youtube"></i>
            </Button>
            <Button variant="light bg-white text-black" className="p-3">
              <i className="fa-brands fa-linkedin"></i>
            </Button>
          </div>
        </Col>
      </Row>

      <h5 className='mb-3 ms-3 mt-5'>Company</h5>
      <Row>
        <Col xs={12} md={4}>
          <Row className="mb-3">
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Porsche at a Glance</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Partner Forum</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Porsche at a Glance</Button>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={4}>
          <Row className="mb-3">
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Sustainability</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Subsidiaries</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Contact</Button>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={4}>
          <Row className="mb-3">
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Career</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button className='text-white text-decoration-none' variant="link">Press</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="bg-white my-5" style={{ height: '1px', backgroundColor: '#ccc', width: '100%' }}></div>

      <div className="d-flex align-items-center flex-wrap">
        <p className="mb-0 mr-2">© 2025 Porsche India - SKODA AUTO Volkswagen India Private Limited - India.</p>
        <Button variant="link" className="text-white p-0">Legal Notice.</Button>
        <Button variant="link" className="text-white p-0">Cookie Policy.</Button>
        <Button variant="link" className="text-white p-0">Privacy Policy.</Button>
        <Button variant="link" className="text-white p-0">Corporate Governance.</Button>
        <Button variant="link" className="text-white p-0">Open Source Software Notice.</Button>
        <Button variant="link" className="text-white p-0">Whistleblower System.</Button>
      </div>

      <h2 className='text-center mt-5 pt-5'>PORSCHE</h2>
    </Container>
  )
}

export default Footer
