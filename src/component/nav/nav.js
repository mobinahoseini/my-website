import './nav.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Nav = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto" className="text-nav">
          <p>Home</p>
        </Col>
        <Col md="auto" className="text-nav">
          <p>About me</p>
        </Col>
        <Col md="auto" className="text-nav">
          <p>My works</p>
        </Col>
        <Col md="auto" className="text-nav">
          <p>Contact me</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
