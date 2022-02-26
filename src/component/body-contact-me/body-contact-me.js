import "./body-contact-me.scss";
import heroImg from "../../Assets/contact-me-img-3.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialMedia from "../social-media/social-media";
import Instagram from "../../Assets/instagram.png";
import Linkedin from "../../Assets/linkedin .png";
import Dribble from "../../Assets/dribble.png";
import Github from "../../Assets/github.png";

const BodyContactMe = () => {
  return (
    <Container fluid="xl" className="body-contact-container">
      <Row className="align-items-center">
        <Col>
          <div className="body-contact-text">
            <pre className="contact-header">Contact Me</pre>
            <p>We can get in touch together via this:</p>
            <ul>
              <li className="instagram">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/__mobina__hoseini/"
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
                <a
                  href="https://www.instagram.com/__mobina__hoseini/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="dribbble">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dribbble.com/Mobina5731"
                >
                  <img src={Dribble} alt="Instagram" />
                </a>
                <a
                  href="https://dribbble.com/Mobina5731"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dribble
                </a>
              </li>
              <li className="linkedin">
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
              <li className="github">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mobinahoseini/"
                >
                  <img src={Github} alt="Instagram" />
                </a>
                <a
                  href="https://github.com/mobinahoseini/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
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
        <Col md="auto">
          <div className="soci-med">
            <SocialMedia />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BodyContactMe;
