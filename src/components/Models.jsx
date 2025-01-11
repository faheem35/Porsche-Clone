import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Models.css";
import { Col, Container, Row } from 'react-bootstrap';

const Models = () => {
  return (
  
      <Container  className='mt-5 pt-5'>


        <Row>
          <Col>
            <Card className="custom-card-1 " style={{ height: "18rem" }}>
              <Card.Body className="d-flex flex-column justify-content-end text-white">
                <Card.Text className='d-flex justify-content-between'>
                  The Macan.
                  <i className="fa-solid fa-right-long"></i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
  
          <Col>
            <Card className="custom-card-2 animate__animated  animate__bounce " style={{ height: "18rem" }}>
            
              <Card.Body className="d-flex flex-column justify-content-end">
                <Card.Text className='d-flex justify-content-between text-white'>
                  The 2025 Competition is on.
                  <i className="fa-solid fa-right-long"></i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
  
          <Col>
            <Card className="custom-card-3" style={{ height: "18rem" }}>
              <Card.Body className="d-flex flex-column justify-content-end">
                <Card.Text className='d-flex justify-content-between text-white'>
                  The Taycan.
                  <i className="fa-solid fa-right-long"></i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
  
        </Row>
  
        <h1 className='text-center text-black my-5 pt-5'>Models</h1>
        {/* model row 1 */}
        <Row>
          <Col>
            <Card className="modelCard-1 mb-4" style={{ height: "50rem" }} >
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>718</Card.Title>
                <div className="mt-auto">
                  <Card.Text>
                    <h5>The mid-engine sports car for two made for <br /> pure driving pleasure.</h5>
                  </Card.Text>
                  <div className="d-flex gap-2 mt-2">
                    <Button variant=" bg-white text-black" size="lg">
                      Configure your 718
                    </Button>
                    <Button variant="outline-secondary " className='border-white text-white' size="lg">
                      All 718 models
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
  
          <Col>
            <Card className="modelCard-2 mb-4" style={{ height: "50rem" }} >
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>718</Card.Title>
                <div className="mt-auto">
                  <Card.Text>
                    <h5>The mid-engine sports car for two made for <br /> pure driving pleasure.</h5>
                  </Card.Text>
                  <div className="d-flex gap-2 mt-2">
                    <Button variant=" bg-white text-black" size="lg">
                      Configure your 718
                    </Button>
                    <Button variant="outline-secondary " className='border-white text-white' size="lg">
                      All 718 models
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* model row 2 */}
        <Row>
          <Col>
            <Card className="modelCard-3 mb-4" style={{ height: "50rem" }} >
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>718</Card.Title>
                <div className="mt-auto">
                  <Card.Text>
                    <h5>The mid-engine sports car for two made for <br /> pure driving pleasure.</h5>
                  </Card.Text>
                  <div className="d-flex gap-2 mt-2">
                    <Button variant=" bg-white text-black" size="lg">
                      Configure your 718
                    </Button>
                    <Button variant="outline-secondary " className='border-white text-white' size="lg">
                      All 718 models
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
  
          <Col>
            <Card className="modelCard-4 mb-4" style={{ height: "50rem" }} >
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>718</Card.Title>
                <div className="mt-auto">
                  <Card.Text>
                    <h5>The mid-engine sports car for two made for <br /> pure driving pleasure.</h5>
                  </Card.Text>
                  <div className="d-flex gap-2 mt-2">
                    <Button variant=" bg-white text-black" size="lg">
                      Configure your 718
                    </Button>
                    <Button variant="outline-secondary " className='border-white text-white' size="lg">
                      All 718 models
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* model row 3 */}
        <Row>
          <Col>
            <Card className="modelCard-5 mb-4" style={{ height: "50rem" }} >
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>718</Card.Title>
                <div className="mt-auto">
                  <Card.Text>
                    <h5>The mid-engine sports car for two made for <br /> pure driving pleasure.</h5>
                  </Card.Text>
                  <div className="d-flex gap-2 mt-2">
                    <Button variant=" bg-white text-black" size="lg">
                      Configure your 718
                    </Button>
                    <Button variant="outline-secondary " className='border-white text-white' size="lg">
                      All 718 models
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
  
          <Col>
            <Card className="modelCard-6 mb-4" style={{ height: "50rem" }} >
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>718</Card.Title>
                <div className="mt-auto">
                  <Card.Text>
                    <h5>The mid-engine sports car for two made for <br /> pure driving pleasure.</h5>
                  </Card.Text>
                  <div className="d-flex gap-2 mt-2">
                    <Button variant=" bg-white text-black" size="lg">
                      Configure your 718
                    </Button>
                    <Button variant="outline-secondary " className='border-white text-white' size="lg">
                      All 718 models
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
  {/* sub model section */}
  
 <Row className='mt-5 pt-5 g-0'>
      <Col xs={12} md={6}>
        <img
          className='d-flex w-100'
          src="https://images-porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&w=865&ar=16%3A9&q=85&auto=format"
          alt=""
        />
      </Col>

      <Col xs={12} md={6} className="d-flex justify-content-center align-items-center ps-3 bg-black">
        <div className="text-start text-white">
          <h4 className='mb-3'>Find your new or pre-owned <br /> Porsche.</h4>
          <p className='mb-4'>
            A Porsche is as individual as its owner. It is always an expression of one’s own <br /> personality. We help you find your personal dream vehicle from authorised <br /> Porsche Centres.
          </p>
          <Button variant="light bg-white text-black fs-6" size="lg">Find your Porsche</Button>
        </div>
      </Col>
    </Row>
  
  
      </Container>
   
  );
}

export default Models;
