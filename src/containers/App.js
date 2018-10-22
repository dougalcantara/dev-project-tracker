import React, { Component } from 'react';
import { $auth } from '../firebase';

class App extends Component {
  componentWillMount() {
    $auth.signInWithEmailAndPassword('doug@mag.cr', 'password').then(user => console.log(user)).catch(err => console.log(err.message || err));
  }

  render() {
    return (
      <div className="app">
        
      </div>
    );
  }
}

export default App;
