import "./body-contact-me.scss";
import heroImg from "../../Assets/32-Photoroom 1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialMedia from "../social-media/social-media";
import Behance from "../../Assets/Email.png";
import Linkedin from "../../Assets/linkedin .png";
import Dribble from "../../Assets/dribble.png";
import Github from "../../Assets/github.png";

const BodyContactMe = () => {
  return (
    <Container fluid="xl" className="body-contact-container">
      <Row className="align-items-center">
        <Col className="social-media-col">
          <div className="body-contact-text">
            <pre className="contact-header">Contact Me</pre>
            <p>We can get in touch together via this:</p>
            <ul>
              <li className="social-list instagram">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.behance.net/mobina-hoseini"
                >
                  <img src={Behance} alt="Behance" />
                </a>
                <a
                  href="mailto:mobinahoseini848@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email me
                </a>
              </li>
              <li className="social-list linkedin">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mobina-hoseini/"
                >
                  <img src={Linkedin} alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mobina-hoseini/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="body-contact-img">
            <img src={heroImg} alt="heroImg" />
          </div>
        </Col>
        <Col lg="auto">
          <div className="soci-med-contact">
            <SocialMedia />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BodyContactMe;
