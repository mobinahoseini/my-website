import './nav.scss';
import { Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Nav = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto" className="text-nav">
          <Link to= "/">Home</Link>
        </Col>
        <Col md="auto" className="text-nav">
          <Link to="/about-me">About me</Link>
        </Col>
        <Col md="auto" className="text-nav">
          <Link to="/my-works">My works</Link>
        </Col>
        <Col md="auto" className="text-nav">
          <Link to="/contact-me">Contact me</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
