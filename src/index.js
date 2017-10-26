import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function changeColor(){
    let colors = ['#38FF98', '#6AFFE3', '#66C8FF', '#8B79FF', '#FF57CD', '#FF6C64',
    '#FF823C', '#FFC928', '#FFFB27', '#D7FF27', '#F787FF', '#63A3FF'];
      document.getElementsByClassName('contact')[0].style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }
  changeColor();
