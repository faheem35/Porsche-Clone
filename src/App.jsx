import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Discover from './components/Discover';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Models from './components/Models';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <>
      <div className='bg-white w-100'>

        {/* Landing Page Section */}
        <Row>
          <Col>
            <LandingPage />
          </Col>
        </Row>

        {/* Models Section */}
        <Row>
          <Col>
            <Models />
          </Col>
        </Row>

        {/* Social Media Section */}
        <Row>
          <Col>
            <SocialMedia />
          </Col>
        </Row>

        {/* Discover Section */}
        <Row>
          <Col>
            <Discover />
          </Col>
        </Row>

        {/* Footer Section */}
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
        
      </div>
    </>
  );
}

export default App;
