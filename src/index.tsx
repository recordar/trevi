import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './css/app.css';
import './css/common.css';
import './css/index.css';

import App from './App';
import { fire } from './utils/firebaseUtils';

const root = document.getElementById('app');
const browserHistory = createBrowserHistory({ basename: '' });

fire();
ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  root,
);
