import "./body-about-me.scss";
import heroImg from "../../Assets/hero-img-2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialMedia from "../social-media/social-media";

const BodyAboutMe = () => {
  return (
    <Container fluid="xl" className="body-container">
      <Row className="align-items-center">
        <Col>
          <div className="body-text">
            <pre className="header">About Me</pre>
            <p>
              I ‘m Mobina Hoseini .I ‘m a UI & UX designer I enjoy turning
              complex problems into simple, beautiful and intuitive designs. I
              am a Electrical Engineering graduate and later switched to the
              awesome world of designing digital interfaces and products
            </p>
            <p>
              I think understanding the human experience is essential for
              creating useful and effective products that make life easier. I
              enjoy using my skill-set to empower people to accomplish their
              goals
            </p>
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

export default BodyAboutMe;
