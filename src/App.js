import React from "react";
import "./style/App.scss";
import Header from "./component/header/header";
import Body from "./component/body/body";
import BodyAboutMe from "./component/body-aboutme/body-about-me";
import Nav from "./component/nav/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import changeTheme from "./changeTheme";
import BodyContactMe from "./component/body-contact-me/body-contact-me";
import MyWork from "./component/my-work/my-work";

let theme = "dark-theme";
const toggleThemes = () => {
  if (theme === "light-theme") {
    changeTheme("dark-theme");
    theme = "dark-theme";
  } else {
    changeTheme("light-theme");
    theme = "light-theme";
  }
};
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div id="app" className="dark-theme">
            <Header onClickMethod={toggleThemes} />
            <Body />
            <div className="nav-bar">
              <Nav />
            </div>
          </div>
        </Route>
        <Route path="/about-me">
          <div id="app" className="dark-theme">
            <Header onClickMethod={toggleThemes} />
            <BodyAboutMe />
            <div className="nav-bar">
              <Nav />
            </div>
          </div>
        </Route>
        <Route path="/contact-me">
          <div id="app" className="dark-theme">
            <Header onClickMethod={toggleThemes} />
            <BodyContactMe />
            <div className="nav-bar">
              <Nav />
            </div>
          </div>
        </Route>
        <Route path="/my-works">
          <div id="app" className="dark-theme">
            <Header onClickMethod={toggleThemes} />
            <MyWork />
            <div className="nav-bar">
              <Nav />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
