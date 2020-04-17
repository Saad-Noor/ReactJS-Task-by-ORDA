import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App value={1000} />
  </React.StrictMode>,
  rootElement
);
