import "./switch.scss";
import sun from "../../Assets/icon/sun.svg";
import moon from "../../Assets/icon/moon.svg";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

const Switch = () => {
    return ( 
        <Row className="row-theme">
        <Col md="auto" className="moon-col">
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
        <Col md="auto" className="moon-col">
          <div className="moon">
            <img src={moon} alt="moon" />
          </div>
        </Col>
      </Row>
     );
}
 
export default Switch;