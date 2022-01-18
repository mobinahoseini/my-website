import "./body.scss";
import heroImg from "../../Assets/hero-img.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialMedia from "../social-media/social-media";

const Body = () => {
  return (
    <Container fluid="xl" className="body-container">
      <Row className="align-items-center">
        <Col>
          <div className="body-text">
            <p className="Header">
              I design & develop experiences that make people’ s lives simple
            </p>
          </div>
          <div className="body-action">
            <button> See My Works </button>
          </div>
        </Col>
        <Col>
          <div className="body-img">
            <img src={heroImg} alt="heroImg" />
          </div>
        </Col>
        <Col md="auto">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
