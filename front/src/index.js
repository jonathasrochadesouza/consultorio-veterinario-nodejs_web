import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  HelloMessage from './HelloMessage';
import reportWebVitals from './reportWebVitals';
import Teste from './pagina/Teste';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloMessage name="David"/> */}
    {/* <Teste /> */}
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
