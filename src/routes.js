import React from 'react'

import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import LocalStorage from './models/local-storage'

import AnonLayout from './components/anon-layout.js'
import Auth from './components/auth.js'
import AuthCallback from './components/auth-callback.js'
import AuthLayout from './components/auth-layout.js'
import NotFound from './components/not-found.js'
import Spotify from './components/spotify.js'

function redirectIfSignedIn(nextState, replace) {
  if (LocalStorage.has('spotify-token')) {
    replace({
      pathname: '/spotify',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireSpotifyAuth(nextState, replace) {
  if (!LocalStorage.has('spotify-token')) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AnonLayout}>
      <IndexRoute component={Auth} onEnter={redirectIfSignedIn} />
      <Route path="auth" component={AuthCallback} />
    </Route>
    <Route path="/spotify" component={AuthLayout} onEnter={requireSpotifyAuth}>
      <IndexRoute component={Spotify} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)

export default routes
