import React from 'react';
import LocalStorage from '../model/LocalStorage.js';

export default class SignedIn extends React.Component {
    render() {
        console.log(LocalStorage.get('spotify-token'));
        return <p>Signed in!</p>
    }
}