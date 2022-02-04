import React from "react";
import "./style/App.scss";
import Header from "./component/header/header";
import Body from "./component/body/body";
import BodyAboutMe from "./component/body-aboutme/body-about-me";
import Nav from "./component/nav/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import changeTheme from './changeTheme';

let theme = 'light-theme';
const toggleThemes = () => {
  if (theme === 'light-theme') {
    changeTheme('dark-theme');
    theme = 'dark-theme';
  } else {
    changeTheme('light-theme');
    theme = 'light-theme'
  }
};
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div id="app" className="light-theme">
            <Header onClickMethod={toggleThemes} />
            <Body />
            <div className="nav-bar">
              <Nav />
            </div>
          </div>
        </Route>
        <Route path="/about-me">
          <div id="app" className="light-theme">
            <Header onClickMethod={toggleThemes} />
            <BodyAboutMe />
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
