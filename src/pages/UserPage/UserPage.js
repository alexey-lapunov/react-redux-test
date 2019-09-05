import React from 'react';

import { connect } from 'react-redux';
//import { featchUser } from './../../store/user/thunks';

const UserPage = ({ match }) => {
  return (
    <div>
      <h1>{match.params.userId}</h1>;
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.person,
    isFetching: state.user.isFetching,
    error: state.user.isFetching
  };
};

export default connect(mapStateToProps)(UserPage);
