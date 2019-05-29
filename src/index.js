import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./containers/App";

ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
serviceWorker.register();
