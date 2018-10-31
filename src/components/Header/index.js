import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { $auth } from '../../firebase';
import { toggleNavState } from '../../redux/modules/ui.module';

import Logo from '../Logo';
import './header.css';

const mapStateToProps = state => ({
  user: state.auth.user,
  navDrawerIsOpen: state.ui.navDrawerIsOpen,
  headerHeight: state.ui.headerHeight,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleNavState,
}, dispatch);

const Header = props => (
  <header className="app-header">
    <div className="inner inner--default">
      <div className="app-header--logo">
        <div className="svg-wrapper">
          <div className="svg-wrapper--content">
            <Logo />
          </div>
        </div>
      </div>
      <div className="app-header--actions-toggle" onClick={ props.toggleNavState }>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div style={{ 'top': props.headerHeight }} className={`app-header--actions ${ props.navDrawerIsOpen ? 'drawer-open' : '' }`}>
        <div className="app-header--actions_content">
          <ul>
            <li>
              <Link to={`/dashboard/${ props.user.uid }`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/profile/${ props.user.uid }`}>Profile</Link>
            </li>
            { 
              props.user.uid &&
              <li>
                <button onClick={ () => $auth.signOut() }>Sign Out</button>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
