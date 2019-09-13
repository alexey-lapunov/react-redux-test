import React from 'react';
import PostCard from './PostCard';

const UserPosts = ({ posts }) => {
  return posts.map(post => <div key={post.id}>{post.title}</div>);
};

export default UserPosts;
