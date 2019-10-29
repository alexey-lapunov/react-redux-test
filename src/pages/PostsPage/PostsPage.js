import React from 'react';
import { connect } from 'react-redux';
import { featchPostsThunk, featchPostThunk } from './../../store/posts/thunks';

import PostList from './../../components/PostList';
import FullPostCard from './../../components/FullPostCard';
import Modal from './../../components/Modal';

class PostsPage extends React.Component {
  state = {
    isOpenModal: false
  };

  componentDidMount() {
    this.props.featchPostsThunk();
  }

  setActivePosts = id => {
    this.onModalOpen();
    this.props.featchPostThunk(id);
  };

  onModalOpen = () => {
    this.setState({ isOpenModal: true });
  };

  onModalClose = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { isOpenModal } = this.state;
    const {
      postsList: { data: postsData, isFetching: postsIsFetching },
      activePost: { data: activePostData, isFetching: activePostIsFetching }
    } = this.props;
    return (
      <>
        <div>
          {postsIsFetching ? (
            <span>Loading...</span>
          ) : (
            <PostList posts={postsData} setActivePost={this.setActivePosts} />
          )}
        </div>
        <Modal isOpen={isOpenModal} onClose={this.onModalClose}>
          <FullPostCard data={activePostData} loading={activePostIsFetching} />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  postsList: {
    data: state.posts.postsList.data,
    isFetching: state.posts.postsList.isFetching,
    error: state.posts.postsList.error
  },
  activePost: {
    data: state.posts.activePost.data,
    isFetching: state.posts.activePost.isFetching,
    error: state.posts.activePost.error
  }
});

const mapDispatchToProps = dispatch => ({
  featchPostsThunk: () => dispatch(featchPostsThunk()),
  featchPostThunk: id => dispatch(featchPostThunk(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
