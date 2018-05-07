import React, { Component } from 'react';
import './App.css';
import { authURL } from './Components/UserAuth.js';
import { errorPage } from './Components/errorpage.js';

class App extends Component {
  render() {
    return (
      <div>
      <authURL />
      </div>
      <div>
      <errorPage />
      </div>
    );
  }
}

export default App;
