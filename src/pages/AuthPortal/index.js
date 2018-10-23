import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { $auth } from '../../firebase';

import { setUser } from '../../redux/modules/auth.module';

import AuthForm from '../../components/AuthForm';

import './authPortal.css';

const state = {
  email: '',
  password: '',
};

const updateUserInput = e => state[e.target.name] = e.target.value;

const mapDispatchToProps = dispatch => bindActionCreators({
  setUser,
}, dispatch);

const onSubmit = (e, user) => {
  e.preventDefault();
  $auth.signInWithEmailAndPassword(state.email, state.password);
}

const AuthPortal = ({ setUser }) => (
  <div className="page auth-portal">
    <div className="inner inner--default">
      <div className="welcome-text-container">
        <h1>Welcome!</h1>
        <p>Please log in/sign up</p>
      </div>
      <div className="form-container">
        <div className="form-container--liner">
          <AuthForm _state={ state } _updateUserInput={ updateUserInput } _onSubmit={ onSubmit } />
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(connect(null, mapDispatchToProps)(AuthPortal));
