import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const Dashboard = props => (
  <div className="page dashboard">
    <div className="inner inner--default">
      <h1>{ props.user.uid }</h1>
    </div>
  </div>
);

export default withRouter(connect(mapStateToProps, null)(Dashboard));
