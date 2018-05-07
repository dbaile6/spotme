import React, { Component } from 'react';
import './App.css';
import { Auth } from './Components/UserAuth.js';
import { ErrorPage } from './Components/ErrorPage.js';
import { SignedIn } from './Components/SignedIn.js';
import { AuthCalls } from './Components/AuthCallback.js'
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

function App(props) {
    return <div>{props.children}</div>;
}

const routes = (
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Auth} />
      <Route path="auth" component={AuthCalls} />
      <Route path="signedin" component={SignedIn} />
      <Route path="*" component={ErrorPage} />
    </Route>
</Router>
)

export default routes