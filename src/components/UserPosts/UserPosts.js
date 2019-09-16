import React from 'react';
import PostCard from './PostCard';

import Modal from './../Modal/';

import styles from './styles.module.scss';

const UserPosts = ({ posts, isModalOpen, onModalOpen }) => {
  return (
    <>
      <div className={styles.posts}>
        <div className={styles.grid}>
          {posts.map(post => (
            <div key={post.id} className={styles.col}>
              <PostCard
                title={post.title}
                desc={post.body}
                onClick={() => onModalOpen(true)}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen}>
        <span>This Modal Window motherfucker!!!</span>
      </Modal>
    </>
  );
};

export default UserPosts;
