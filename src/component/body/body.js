import "./body.scss";
import { Link } from "react-router-dom";
import SocialMedia from "../social-media/social-media";
import heroImg from "../../Assets/home-img2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Body = () => {
  return (
    <Container fluid="xl" className="body-container">
      <Row className="align-items-center">
        <Col>
          <div className="body-text">
            <p className="header-body">
              I design & develop experiences that make people’ s lives simple
            </p>
          </div>
          <div className="body-action">
            <Link rel="noreferrer" to="/my-works">
              {" "}
              See My Works{" "}
            </Link>
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
