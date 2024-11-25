import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(meta);
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Orbitron:wght@400;500;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
