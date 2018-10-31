import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setHeaderHeight } from '../redux/modules/ui.module';

import Header from '../components/Header';
import Router from '../containers/Router';

const mapDispatchToProps = dispatch => bindActionCreators({ setHeaderHeight }, dispatch);

class App extends Component {
  componentDidMount() {
    const header = document.querySelector('.app-header');
    const headerHeight = header.offsetHeight;

    this.props.setHeaderHeight(headerHeight);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main id="main">
          <div className="app-container">
            <Router />
          </div>
        </main>
      </div>
    );
  }
};

export default withRouter(connect(null, mapDispatchToProps)(App));
