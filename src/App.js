import React from "react";
import "./style/App.scss";
import Header from './component/header/header';
import Body from './component/body/body';
import Nav from './component/nav/nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Nav />
    </div>
  );
}

export default App;
