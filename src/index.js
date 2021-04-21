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
import hostwaitingroom from './hostwaitingroom';
import waitingroom from './waitingroom';
import question from './question';
import questionmatch from './questionmatch';
import example from './example';

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

if (typeof window !== 'undefined') {
    ReactDOM.render(
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/howtoplay" component={howtoplay} />
            <Route path="/creategame" component={creategame} />
            <Route path="/joingame" component={joingame} />
            <Route path="/hostwaitingroom" component={hostwaitingroom} />
            <Route path="/waitingroom" component={waitingroom} />
            <Route path="/question" component={question} />
            <Route path="/questionmatch" component={questionmatch} />
            <Route path="/example" component={example} />

        </BrowserRouter>,
        document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//<Route exact path="/about" component = {About} />
