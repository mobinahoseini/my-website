import React from "react";
import "./style/App.scss";
import Header from "./component/header/header";
import Body from "./component/body/body";
import BodyAboutMe from './component/body-aboutme/body-about-me';
import Nav from "./component/nav/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
            <Body />
            <div className="nav-bar">
              <Nav />
            </div>
          </div>
        </Route>
        <Route path="/about-me">
          <div className="App">
            <Header />
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
