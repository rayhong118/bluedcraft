import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { registerIcons } from '@fluentui/react/lib/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

registerIcons({
  icons: {
    FaAngleLeft: <FontAwesomeIcon icon={faAngleLeft} />,
    FaSearch: <FontAwesomeIcon icon={faSearch} />
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
