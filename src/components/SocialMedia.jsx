import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SocialMedia = () => {
  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4 text-black">Social Media Stories</h2>
      <Row>
        {/* First Column */}
        <Col xs={12} md={4} className="mb-4">
          <Row>
            {/* Image 1 */}
            <Col className="mb-3">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/97b72a82920319.5d2ca73975f62.png"
                alt="Image 1"
                className="img-fluid w-100 rounded"
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
          <Row>
            {/* Image 2 */}
            <Col>
              <img
                src="https://www.todomotorperu.com/wp-content/uploads/2022/10/porsche-social-scaled.jpg"
                alt="Image 2"
                className="img-fluid w-100 rounded"
                style={{ height: '150px', objectFit: 'cover' }}
              />
            </Col>
            {/* Image 3 */}
            <Col xs={6}>
              <img
                src="https://autodesignmagazine.com/wp-content/uploads/2022/11/2022111701_Porsche911Dakar-scaled.jpg"
                alt="Image 1"
                className="img-fluid w-100 rounded"
                style={{ height: '150px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={4} className="mb-4">
          <Row className="mb-3">
            {/* Image 1 */}
            <Col>
              <img
                src="https://autoroad.cz/pictures/photo/2018/11/28/52cf814c-2020-porsche-911-5-1fd38c1506.jpg"
                alt="Image 2"
                className="img-fluid w-100 rounded"
                style={{ height: '150px', objectFit: 'cover' }}
              />
            </Col>
            {/* Image 2 */}
            <Col xs={6}>
              <img
                src="https://autodesignmagazine.com/wp-content/uploads/2022/11/2022111701_Porsche911Dakar-scaled.jpg"
                alt="Image 1"
                className="img-fluid w-100 rounded"
                style={{ height: '150px', objectFit: 'cover' }}
              />
            </Col>
          </Row>

          <Row>
            {/* Image 3 */}
            <Col>
              <img
                src="https://pictures.topspeed.com/IMG/crop/201601/2016-porsche-718-boxster-26_1600x0w.jpg"
                alt="Image 1"
                className="img-fluid w-100 rounded"
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>

        {/* Third Column */}
        <Col xs={12} md={4} className="mb-4">
          <Row>
            {/* Image 1 */}
            <Col className="mb-3">
              <img
                src="https://www.hdcarwallpapers.com/download/2015_singer_porsche_911_targa-3840x2160.jpg"
                alt="Image 1"
                className="img-fluid w-100 rounded"
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
          <Row>
            {/* Image 2 */}
            <Col>
              <img
                src="https://i.pinimg.com/originals/8b/01/eb/8b01eb2565edea69933bbd4fb8e7746e.jpg"
                alt="Image 2"
                className="img-fluid w-100 rounded"
                style={{ height: '150px', objectFit: 'cover' }}
              />
            </Col>
            {/* Image 3 */}
            <Col xs={6}>
              <img
                src="https://autodesignmagazine.com/wp-content/uploads/2022/11/2022111701_Porsche911Dakar-scaled.jpg"
                alt="Image 1"
                className="img-fluid w-100 rounded"
                style={{ height: '150px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMedia;
