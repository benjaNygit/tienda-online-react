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

// Propiedades en un componente

// children es una propiedad fija, hace referencia a todos los elementos que se pasan
const Li = ( {children} ) => <li>{children}</li>
const Lii = ( {children, estado} ) => <li>{children} - {estado}</li>
const Liii = ( {children, estado, idioma, tipo} ) => {
  // mostrara los estados por consola
  console.log(idioma, tipo);
  return (
    <li>{children} - {estado}</li>
  )
} 

const Z = () => 
  <ul>
    <Li>Hello World! - 1</Li>
    <Lii estado={'2'}>Hello World!</Lii>
    <Liii
      estado={'3'} idioma={'Ingles'} tipo={'Saludo'}
    >Hello World!</Liii>
    <li>Hello World! - 4</li>
  </ul>
root.render(
  <Z/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
