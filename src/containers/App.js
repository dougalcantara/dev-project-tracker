import React, { Component } from 'react';

import Router from '../containers/Router';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-container">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
