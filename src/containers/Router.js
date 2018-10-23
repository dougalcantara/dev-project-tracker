import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUser } from '../redux/modules/auth.module';
import { $auth } from '../firebase';

import AuthPortal from '../pages/AuthPortal';
import AppInterior from './AppInterior';

const mapStateToProps = state => ({
  user: state.auth.user,
  authErr: state.auth.err,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setUser,
}, dispatch)

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderInterior: false,
    }
  }

  componentDidMount() {
    this.selectUserEntryPoint();
  }

  selectUserEntryPoint() {
    $auth.onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.setState({ renderInterior: true });
      } else {
        this.props.setUser({});
        this.setState({ renderInterior: false });
      }
    })
  }

  render() {
    return (
      <Fragment>
        { this.state.renderInterior ? <AppInterior /> : <AuthPortal /> }
      </Fragment>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));
