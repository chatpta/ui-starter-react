import React from "react";
import logo from "assets/images/logo/logo.svg";
import { Landing } from "./Landing";

function LandingPage(  ) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <Landing />
      </header>
    </div>
  );
}

export default LandingPage;