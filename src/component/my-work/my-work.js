import "./my-work.scss";
import SocialMedia from "../social-media/social-media";
import heroImg from "../../Assets/home-img.png";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import namoImg from "../../Assets/namo-intro.PNG";
import RsoonImg from "../../Assets/Rsoon-intro.png";
import MCarImg from "../../Assets/MCar.png";
import WOWHRImg from "../../Assets/WOWHR-intro.png";
import WOWDesignSystemImg from "../../Assets/WOW Design System-intro.png";

const MyWork = () => {
  // const list = {

  // }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slider-style">
      <div>
        <div className="body-text">
          <p className="header">My works</p>
        </div>
        <Carousel responsive={responsive}>
          <div>
            <a
              href="https://www.behance.net/gallery/206948431/All-in-one-platform-Namo-UXUI-Case-study"
              target="_blank"
            >
              <img src={namoImg} alt="heroImg" />
            </a>
          </div>
          <div>
            <a
              href="https://www.behance.net/gallery/206942035/Investment-app-Rsoon-Redesign-Case-Study"
              target="_blank"
            >
              <img src={RsoonImg} alt="heroImg" />
            </a>
          </div>
          <div>
            <a
              href="https://www.behance.net/gallery/207223261/Car-assistant-App-Mcar"
              target="_blank"
            >
              <img src={MCarImg} alt="heroImg" />
            </a>
          </div>
          <div>
            <a
              href="https://www.behance.net/gallery/207225613/HR-Platform-WOW-Enterprise"
              target="_blank"
            >
              <img src={WOWHRImg} alt="heroImg" />
            </a>
          </div>
          <div>
            <a
              href="https://www.behance.net/gallery/195643297/Design-System-Case-Study-Connect2WOW"
              target="_blank"
            >
              <img src={WOWDesignSystemImg} alt="heroImg" />
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MyWork;
