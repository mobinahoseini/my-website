import "./header.scss";
import Switch from "../switch/switch";
import logo from "../../Assets/my-logo.svg";
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
          <Switch />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
