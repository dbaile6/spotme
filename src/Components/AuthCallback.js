import React from 'react';
import { withRouter } from 'react-router';

import LocalStorage from '../models/local-storage.js';

export class AuthCalls extends React.Component {
    componentWillMount() {
        const hash = this.props.location.hash;
        const ampSplit = hash.split('&');
        const preToken = 'access_token=';
        const tokenPart = ampSplit.filter(str => str.indexOf(preToken)) [0];
        const indice = tokenPart.indexOf(preToken);
        const jwToken = tokenPart.slice(indice + preToken.length)
        LocalStorage.set('spotify-token', jwToken);
        this.props.router.push('/spotify');
    }

    render() {
        return <p>Just one moment . . .</p>
    }
}

export default withRouter(AuthCalls);