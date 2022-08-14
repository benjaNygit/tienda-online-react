import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//);

// formas de crear elementos
const x = React.createElement('p', null, 'Hello World! - x')
const y = <p>Hello World! - y</p>
const Z = () => <p>Hello World! - z</p> //jsx
root.render(
  // x
  // y
  <Z/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
