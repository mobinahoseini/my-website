import "./body-about-me.scss";
import heroImg from "../../Assets/33 (1).png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialMedia from "../social-media/social-media";

const BodyAboutMe = () => {
  return (
    <Container fluid="xl" className="body-about-container">
      <Row className="align-items-center">
        <Col>
          <div className="body-about-text">
            <pre className="about-header">About Me</pre>
            <p>
              Experienced Product Designer with 3+ years of success in creating
              intuitive, visually compelling designs. Skilled in translating
              business needs into user-centric solutions, leveraging a
              background in electrical engineering and extensive digital product
              design experience. Proficient in team leadership, efficient design
              processes, and documentation management to consistently deliver
              exceptional user experiences and drive business growth.
            </p>
          </div>
          <div className="body-action">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://mob-cvs.s3.ir-thr-at1.arvanstorage.ir/CV.pdf"
            >
              {" "}
              Download My resume{" "}
            </a>
          </div>
        </Col>
        <Col>
          <div className="body-about-img">
            <img src={heroImg} alt="heroImg" />
          </div>
        </Col>
        <Col md="auto">
          <div className="soci-med-aboutme">
            <SocialMedia />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BodyAboutMe;
