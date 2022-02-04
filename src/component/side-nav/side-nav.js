import './side-nav.scss';
import Nav from "../nav/nav";

const SideNav = () => {
    // function openNav() {
    //     document.getElementById("myNav").style.width = "100%";
    //   }
      
    //   function closeNav() {
    //     document.getElementById("myNav").style.width = "0%";
    //   }
  return (
    <div>
      <div id="myNav" class="overlay">
        {/* <a href="javascript:void(0)" class="closebtn">
          &times;
        </a> */}
        <div class="overlay-content">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
