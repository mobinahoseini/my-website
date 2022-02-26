import "./body.scss";
import heroImg from "../../Assets/home-img.png";
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
            <p className="header">
              I design & develop experiences that make people’ s lives simple
            </p>
          </div>
          <div className="body-action">
            <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/mobina-hoseini/"> See My Experiences </a>
          </div>
        </Col>
        <Col>
          <div className="body-img">
            <img src={heroImg} alt="heroImg" />
          </div>
        </Col>
        <Col md="auto">
          <div className="soci-med">
            <SocialMedia />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
