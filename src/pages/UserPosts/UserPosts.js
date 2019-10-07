import React from 'react';
import { connect } from 'react-redux';

import { featchUserPosts, featchUserPost } from './../../store/user/thunks';

import PostList from './../../components/PostList';
import FullPostCard from './../../components/FullPostCard';
import Modal from './../../components/Modal';

class UserPosts extends React.Component {
  state = {
    isOpenModal: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { userId, featchUserPosts } = this.props;
    featchUserPosts(userId);
  };

  setActivePost = id => {
    const { featchUserPost } = this.props;

    this.setState({ isOpenModal: true });
    featchUserPost(id);
  };

  onModalClose = () => {
    this.setState({ isOpenModal: false });
  };

  // render methods
  showLoader = () => <span>Loading...</span>;

  showError = () => <span>Error</span>;

  showContent = () => {
    const {
      posts: { data }
    } = this.props;

    return <PostList posts={data} setActivePost={this.setActivePost} />;
  };

  renderFunction = () => {
    const {
      posts: { isFetching, error }
    } = this.props;

    if (isFetching) return this.showLoader();
    if (error) return this.showError();

    return this.showContent();
  };

  render() {
    const { isOpenModal } = this.state;
    const {
      post: { data: postData, isFetching: isFetchingData }
    } = this.props;

    return (
      <>
        <div>{this.renderFunction()}</div>
        <Modal isOpen={isOpenModal} onClose={this.onModalClose}>
          <FullPostCard data={postData} loading={isFetchingData} />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: {
    data: state.user.posts.data,
    isFetching: state.user.posts.isFetching,
    error: state.user.posts.error
  },
  post: {
    data: state.user.post.data,
    isFetching: state.user.post.isFetching,
    error: state.user.post.error
  }
});

const mapDispatchToProps = dispatch => {
  return {
    featchUserPosts: id => dispatch(featchUserPosts(id)),
    featchUserPost: id => dispatch(featchUserPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);
