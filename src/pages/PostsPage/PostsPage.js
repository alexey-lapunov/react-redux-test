import React from 'react';
import PostList from './../../components/PostList';

class PostsPage extends React.Component {
  render() {
    return (
      <div>
        <PostList
          posts={[{ title: '11' }]}
          setActivePost={this.setActivePost}
        />
      </div>
    );
  }
}

export default PostsPage;
