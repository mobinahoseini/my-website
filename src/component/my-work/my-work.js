import "./my-work.scss";
import SocialMedia from "../social-media/social-media";
import heroImg from "../../Assets/home-img.png";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import namoImg from "../../Assets/namo-intro.PNG";


const MyWork = () => {
  // const list = {

  // }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="slider-style">
      <div>
      <div className="body-text">
            <p className="header">
             My works
            </p>
          </div>
        <Carousel responsive={responsive}>
          <div><img src={namoImg} alt="heroImg" /></div>
          <div><img src={namoImg} alt="heroImg" /></div>
          <div><img src={namoImg} alt="heroImg" /></div>
          <div><img src={namoImg} alt="heroImg" /></div>
          <div><img src={namoImg} alt="heroImg" /></div>
          <div><img src={namoImg} alt="heroImg" /></div>
          <div>Item 4</div>
          <div>Item 4</div>
          <div>Item 4</div>
        </Carousel>
      </div>
    </div>
  );
};

export default MyWork;
