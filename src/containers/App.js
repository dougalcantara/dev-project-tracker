import React from 'react';

import Header from '../components/Header';
import Router from '../containers/Router';

const App = props => (
  <div className="app">
    <Header />
    <main id="main">
      <div className="app-container">
        <Router />
      </div>
    </main>
  </div>
);

export default App;
