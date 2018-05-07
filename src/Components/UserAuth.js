import React from 'react'
import Config from '../public/developer.json'

export default class Auth extends React.Component {
    render() {
        const hostUrl = 'https://accounts.spotify.com'
        const urlRedirect = `${window.location.protocol}//${window.location.hostUrl}/auth`
        const scopes = 'user-library-read'
        const authUrl = `${hostUrl}/authorize?response_type=token` +
            `&redirect_uri=${encodeURIComponent(urlRedirect)}` +
            `&client_id=${Config.spotify.clientId}` +
            `&scope=${encodeURIComponent(scopes)}`
        return ( <a href = {authUrl} > Sign into Spotify </a>
        )
    }
}