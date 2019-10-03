import React from 'react';

import PostCard from '../PostCard';

import styles from './styles.module.scss';

class PostList extends React.Component {
  render() {
    const posts = [];
    return (
      <div className={styles.posts}>
        <div className={styles.grid}>
          {posts.map(post => (
            <div key={post.id} className={styles.col}>
              <PostCard title={post.title} desc={post.body} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostList;
