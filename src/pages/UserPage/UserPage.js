import React from 'react';

import { connect } from 'react-redux';
import { onOpenModalPost } from './../../store/user/actions';
import { featchUser, featchUserPosts } from './../../store/user/thunks';

import UserCard from './../../components/UserCard';
import { UserPosts } from './../../components/UserPosts';
import { Route } from 'react-router-dom';
import { Nav, NavItem } from './../../components/Nav';

import styles from './styles.module.scss';

class UserPage extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { featchUser, featchUserPosts, match } = this.props;

    featchUser(match.params.userId);
    featchUserPosts(match.params.userId);
  };

  render() {
    const {
      user: { data: userData },
      posts: { data: userPosts, isModalOpen },
      onOpenModalPost,
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
            <NavItem to={`${match.url}/photos`} text="Photos" />
            <NavItem to={`${match.url}/todos`} text="Todos" />
          </Nav>
        </div>
        <div className={styles.routers}>
          <Route
            path={`${match.url}/posts`}
            component={() => (
              <UserPosts
                posts={userPosts}
                isModalOpen={isModalOpen}
                onModalOpen={onOpenModalPost}
              />
            )}
          />
          <Route
            path={`${match.url}/photos`}
            component={() => <span>photo</span>}
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
      error: state.user.person.isFetching
    },
    posts: {
      data: state.user.posts.data,
      isFetching: state.user.posts.isFetching,
      error: state.user.posts.isFetching,
      isModalOpen: state.user.posts.isModalOpen
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    featchUser: id => dispatch(featchUser(id)),
    featchUserPosts: id => dispatch(featchUserPosts(id)),
    onOpenModalPost: bool => dispatch(onOpenModalPost(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
