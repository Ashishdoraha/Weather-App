import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Ashishdoraha">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://thunderous-sherbet-58bd29.netlify.app">
          Ashish Pandey
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.goole.com/">
          Google
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
