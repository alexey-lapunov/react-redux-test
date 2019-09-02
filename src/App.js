import React from 'react';
import { connect } from 'react-redux';

import { fetchUsersList } from './store/users/thunks';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsersList();
  }

  render() {
    const { usersList } = this.props;

    return (
      <div className="App">
        {usersList.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usersList: state.people.entities,
    error: state.people.error,
    isFetching: state.people.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersList: () => dispatch(fetchUsersList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
