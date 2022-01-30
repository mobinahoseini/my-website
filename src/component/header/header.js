import "./header.scss";
import Switch from "../switch/switch";
import logo from "../../Assets/my-logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import menu from "../../Assets/icon/menu.svg";
import SideNav from "../side-nav/side-nav";

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
          <div className="sw">
            <Switch />
          </div>
          <div className="side-navbar">
            <SideNav />
            <img src={menu} alt="menu" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
