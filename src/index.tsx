import React from "react";
import "./index.css";
import App from "./App";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import ReactDOM from "react-dom";

initializeIcons();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
