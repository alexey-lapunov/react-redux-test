import React from 'react';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  featchUser,
  featchUserPosts,
  featchUserPost,
  featchUserAlbums
} from './../../store/user/thunks';

import UserCard from './../../components/UserCard';
import { UserPosts } from './../../components/UserPosts';
import { Nav, NavItem } from './../../components/Nav';
import PhotoAlbums from './../../components/PhotoAlbums';

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
    const {
      user: { data: userData },
      match
    } = this.props;

    return (
      <div className={styles.userPage}>
        <div className={styles.userCard}>
          <UserCard userData={userData} />
        </div>
        <div className={styles.nav}>
          <Nav>
            <NavItem to={`${match.url}/posts`} text="Posts" />
            <NavItem to={`${match.url}/photos`} text="Photo Albums" />
            <NavItem to={`${match.url}/todos`} text="Todos" />
          </Nav>
        </div>
        <div className={styles.routers}>
          <Route
            path={`${match.url}/posts`}
            component={() => <div>Posts</div>}
          />
          <Route
            path={`${match.url}/photos`}
            component={() => <div>Photo Albums</div>}
          />
          <Route
            path={`${match.url}/todos`}
            component={() => <span>todos</span>}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: {
      data: state.user.person.data,
      isFetching: state.user.person.isFetching,
      error: state.user.person.error
    }
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
