import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './styles/styles.scss';
import './font/Northwell.ttf';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-5SHTE8NYMX"; 
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
  
);


