import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import About from './about';
import howtoplay from './howtoplay';
import creategame from './creategame';
import joingame from './joingame';

// const rootElement = document.getElementById("root");
//     ReactDOM.render(
//       <BrowserRouter>
//        <Switch>
//         <Route exact path="/about" component={About} />
//         <Route path="/howtoplay" component={howtoplay} />
//       </Switch>
//       </BrowserRouter>,
//       rootElement
//     );

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={App} />
      <Route path="/about" component={About} />
      <Route path="/howtoplay" component={howtoplay} />
      <Route path="/creategame" component={creategame} />
      <Route path="/joingame" component={joingame} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//<Route exact path="/about" component = {About} />