import React from 'react';
import { connect } from 'react-redux';

import { featchUserPosts } from './../../store/user/thunks';

import PostList from './../../components/PostList';

class UserPosts extends React.Component {
  componentDidMount() {
    //this.getData(1);
  }

  getData = id => {
    this.props.featchUserPosts(id);
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        ssss
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: {
    data: state.user.posts.data,
    isFetching: state.user.posts.isFetching,
    error: state.user.posts.error
  }
});

const mapDispatchToProps = dispatch => {
  return {
    featchUserPosts: id => dispatch(featchUserPosts(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);
