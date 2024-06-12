import "./nav.scss";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";

const Nav = ({ closeNav }) => {
  const router = useRouteMatch();

  const navs = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About Me",
      path: "/about-me",
    },
    {
      text: "My works",
      path: "/my-works",
    },
    {
      text: "Contact me",
      path: "/contact-me",
    },
  ];
  const path = router.path;
  return (
    <Container>
      <Row className="justify-content-center">
        {navs.map((nav) => (
          <Col md="auto" className="text-nav">
            <Link
              to={nav.path}
              onClick={closeNav}
              className={path === nav.path ? "active" : ""}
            >
              {nav.text}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Nav;
