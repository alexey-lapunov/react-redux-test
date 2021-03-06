import React from 'react';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { featchUser } from './../../store/user/thunks';

import UserPosts from '../UserPostsPage';
import UserAlbums from '../UserAlbumsPage';
import UserTodosPage from './../UserTodosPage';
import UserCard from './../../components/UserCard';
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
            render={() => <UserPosts userId={match.params.userId} />}
          />
          <Route
            path={`${match.url}/photos`}
            render={() => <UserAlbums userId={match.params.userId} />}
          />
          <Route
            path={`${match.url}/todos`}
            render={() => <UserTodosPage userId={match.params.userId} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: {
    data: state.user.person.data,
    isFetching: state.user.person.isFetching,
    error: state.user.person.error
  }
});

const mapDispatchToProps = dispatch => ({
  featchUser: id => dispatch(featchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
