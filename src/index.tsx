import React from "react";
import "./index.css";
import App from "./App";
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>);