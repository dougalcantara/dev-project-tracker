import React from 'react';

const AuthForm = ({ _state, _updateUserInput, _onSubmit }) => (
  <form onSubmit={ e => _onSubmit(e, _state) }>
    <div className="input-group">
      <label htmlFor="email">Email Address:</label>
      <input type="email" name="email" id="email" onChange={ e => _updateUserInput(e) } />
      <div className="input-pseudo"></div>
    </div>
    <div className="input-group">
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" onChange={ e => _updateUserInput(e) } />
      <div className="input-pseudo"></div>
    </div>
    <div className="input-group">
      <button type="submit">Submit</button>
    </div>
  </form>
);

export default AuthForm;
