import React from 'react';
import { connect } from 'react-redux';
import { featchPostsThunk } from './../../store/posts/thunks';

import PostList from './../../components/PostList';
import Modal from './../../components/Modal';

class PostsPage extends React.Component {
  state = {
    isOpenModal: false
  };

  componentDidMount() {
    this.props.featchPostsThunk();
  }

  setActivePosts = id => {
    console.log(id);
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
      activePosts
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
          {/* <FullPostCard data={postData} loading={isFetchingData} /> */}
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
  activePost: {}
});

const mapDispatchToProps = dispatch => ({
  featchPostsThunk: () => dispatch(featchPostsThunk())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
