import React from 'react'

import Config from '../public/config'

export default class Auth extends React.Component {
  render() {
    const spotlogIn = 'https://accounts.spotify.com'
    const redirectUri = `localhost`
    const scopes = 'user-library-read playlist-modify-public'
    const authUrl = `${SpotLogIn}/authorize?response_type=token` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&client_id=${Config.spotify.clientId}` +
      `&scope=${encodeURIComponent(scopes)}`
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle">
              Sign in to create true control over your listening habits.
            </h2>
            <p>
              <a
                href={authUrl}
                className="spotify-button is-primary button is-large"
              >Spotify Login</a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}
