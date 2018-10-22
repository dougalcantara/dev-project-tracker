import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUser } from '../../redux/modules/auth.module';

const state = {
  email: '',
  password: '',
};

const updateUserInput = e => state[e.target.name] = e.target.value;

const mapDispatchToProps = dispatch => bindActionCreators({
  setUser,
}, dispatch);

const AuthPortal = ({ setUser }) => (
  <Fragment>
    <div className="inner inner--default">
      <div className="form-container">
        <div className="form-container--liner">
          <form onSubmit={ e => setUser(e, state) }>
            <div className="input-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" id="email" onChange={ e => updateUserInput(e) } />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" onChange={ e => updateUserInput(e) } />
            </div>
            <div className="input-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Fragment>
);

export default withRouter(connect(null, mapDispatchToProps)(AuthPortal));
