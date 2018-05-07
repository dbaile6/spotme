import React, { Component } from 'react';
import './App.css';
import { authURL } from './Components/UserAuth.js';
import { errorPage } from './Components/ErrorPage.js';
import { SignedIn } from './Components/SignedIn.js';
import { AuthCalls } from './Components/AuthCallback.js'
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

function App(props) {
    return <div>{props.children}</div>;
}

const routes = (
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={authURL} />
      <Route path="auth" component={AuthCalls} />
      <Route path="signedin" component={Signedin} />
      <Route path="*" component={NotFound} />
    </Route>
</Router>
)

export default routes