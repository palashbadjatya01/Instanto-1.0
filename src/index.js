import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import { firebaseApp, database, ref } from './firebase';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './components/app';
import AppAdmin from './components/appAdmin';

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		browserHistory.push('/app');
	}	
	else {
		browserHistory.replace('/signin');
	}
})
ReactDOM.render (
  <Router path="/" history={browserHistory}>
  	<Route path="/signin" component={SignIn} />
  	<Route path="/appadmin" component={AppAdmin} />
  	<Route path="/app" component={App} />
  	<Route path="/signup" component={SignUp} />
  </Router>, document.getElementById('root')
)