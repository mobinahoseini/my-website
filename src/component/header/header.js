import "./header.scss";
import logo from "../../Assets/my-logo.svg";
import sun from "../../Assets/icon/sun.svg";
import moon from "../../Assets/icon/moon.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <Container fluid="xl">
      <Row>
        <Col>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Col>
        <Col>
          <Row className="row-theme">
            <Col md="auto">
              <div className="sun">
                <img src={sun} alt="sun" />
              </div>
            </Col>
            <Col md="auto">
              <div className="theme-switcher">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </Col>
            <Col md="auto">
              <div className="moon">
                <img src={moon} alt="moon" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
