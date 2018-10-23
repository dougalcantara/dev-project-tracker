import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Router from '../containers/Router';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navDrawerIsOpen: false,
    };
  }

  toggleNavDrawer() {
    this.setState({ navDrawerIsOpen: !this.state.navDrawerIsOpen });
  }

  render() {
    return (
      <div className="app">
        <Header _toggleNavDrawer={ this.toggleNavDrawer.bind(this) } _navDrawerIsOpen={ this.state.navDrawerIsOpen } />
        <main id="main">
          <div className="app-container">
            <Router />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
