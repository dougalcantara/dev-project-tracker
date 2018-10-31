import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUser } from '../redux/modules/auth.module';
import { toggleNavState, setRenderInterior } from '../redux/modules/ui.module';
import { $auth } from '../firebase';

import AuthPortal from '../pages/AuthPortal';
import AppInterior from './AppInterior';

const mapStateToProps = state => ({
  user: state.auth.user,
  authErr: state.auth.err,
  renderInterior: state.ui.renderInterior,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setUser,
  toggleNavState,
  setRenderInterior,
}, dispatch)

class Router extends Component {
  componentDidMount() {
    this.selectUserEntryPoint();
  }

  selectUserEntryPoint() {
    $auth.onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.setRenderInterior(true);
      } else {
        this.props.setUser({});
        this.props.setRenderInterior(false);
        this.props.history.push(`/`);
        this.props.toggleNavState();
      }
    })
  }

  render() {
    return (
      <Fragment>
        { this.props.renderInterior ? <AppInterior /> : <AuthPortal /> }
      </Fragment>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));
