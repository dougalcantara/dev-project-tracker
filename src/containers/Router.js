import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUser } from '../redux/modules/auth.module';

import AuthPortal from '../pages/AuthPortal';

const mapStateToProps = state => ({
  user: state.auth.user,
  authErr: state.auth.err,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setUser,
}, dispatch)

class Router extends Component {
  async componentDidMount() {
  }

  render() {
    return (
      <AuthPortal />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));
