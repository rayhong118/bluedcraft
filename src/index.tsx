import React from "react";
import "./index.css";
import App from "./App";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

initializeIcons();
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);