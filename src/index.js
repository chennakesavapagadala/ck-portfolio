import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Add this script in a <script> tag or a separate JS file
document.querySelectorAll('.t-progress').forEach((bar) => {
  let width = 0;
  const target = parseInt(bar.style.width);

  const interval = setInterval(() => {
      if (width >= target) {
          clearInterval(interval);
      } else {
          width++;
          bar.style.width = `${width}%`;
          bar.textContent = `${width}%`;
      }
  }, 10);
});
