import React from 'react'

import Config from '../public/config'

export default class Auth extends React.Component {
  render() {
    const SpotLogIn = 'https://accounts.spotify.com'
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
              Sign in with your Spotify account to see trends about your saved songs.
            </h2>
            <p>
              <a
                href={authUrl}
                className="spotify-button is-primary button is-large"
              >Sign into Spotify</a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}
