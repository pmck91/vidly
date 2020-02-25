import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from "react-router-dom";

/*eslint no-extend-native: [0]*/
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
