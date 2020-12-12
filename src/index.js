import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode'; 
import * as serviceWorker from './serviceWorker';

import store from './store';

import './assets/dist/css/app.css';
import './assets/dist/css/custom.css';
import 'nprogress/nprogress.css';

import App from './App';
import setAuthToken from './utils/setAuthToken';
import {
  logOutAction,
  setCurrentAdminUser,
} from './actions/admin/authAction/Users';


if (localStorage.jwtToken) {
  //set Auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token for user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and authenticated
  store.dispatch(setCurrentAdminUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logOutAction());
    // change to pathname before deployment to production
    window.location.hash = '#/';
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
); 

serviceWorker.register();