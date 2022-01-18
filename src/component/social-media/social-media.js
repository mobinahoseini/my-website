import instagram from "../../Assets/icon/Instagram.svg";
import linkdin from "../../Assets/icon/Linkdin.svg";
import behance from "../../Assets/icon/Behanc.svg";
import dribbble from "../../Assets/icon/Dribbble.svg";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="instagram">
        <a href="www.instagram.com">
          <img src={instagram} alt="instagram" />
        </a>
      </div>

      <div className="linkdin">
        <a href="www.linkdin.com">
          <img src={linkdin} alt="linkdin" />
        </a>
      </div>
      <div className="behance">
        <a href="behance">
          <img src={behance} alt="behance" />
        </a>
      </div>
      <div className="dribbble">
        <a href="www.dribbble.com">
          <img src={dribbble} alt="dribbble" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
