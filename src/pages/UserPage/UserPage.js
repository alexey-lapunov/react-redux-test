import React from 'react';

import { connect } from 'react-redux';
import { featchUser } from './../../store/user/thunks';

import UserCard from './../../components/UserCard';
import { Route } from 'react-router-dom';
import { Nav, NavItem } from './../../components/Nav';

import styles from './styles.module.scss';

class UserPage extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { featchUser, match } = this.props;

    featchUser(match.params.userId);
  };

  render() {
    const { user, match } = this.props;

    return (
      <div className={styles.userPage}>
        <div className={styles.userCard}>
          <UserCard userData={user} />
        </div>
        <div className={styles.nav}>
          <Nav>
            <NavItem to={`${match.url}/photos`} text="Photos" />
            <NavItem to={`${match.url}/todos`} text="Todos" />
            <NavItem to={`${match.url}/posts`} text="Posts" />
          </Nav>
        </div>
        <div className={styles.routers}>
          <Route
            path={`${match.url}/photos`}
            component={() => <span>photo</span>}
          />
          <Route
            path={`${match.url}/todos`}
            component={() => <span>todos</span>}
          />
          <Route
            path={`${match.url}/posts`}
            component={() => <span>posts</span>}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.person,
    isFetching: state.user.isFetching,
    error: state.user.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    featchUser: id => dispatch(featchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
