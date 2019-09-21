import React from 'react';
import PostCard from '../PostCard/';
import FullPostCard from '../FullPostCard';

import Modal from './../Modal/';

import styles from './styles.module.scss';

const UserPosts = ({
  posts,
  post,
  isOpenModal,
  onOpenModalPost,
  onCloseModalPost
}) => {
  return (
    <>
      <div className={styles.posts}>
        <div className={styles.grid}>
          {posts.map(post => (
            <div key={post.id} className={styles.col}>
              <PostCard
                title={post.title}
                desc={post.body}
                onClick={() => onOpenModalPost(post.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpenModal} onClose={onCloseModalPost}>
        <FullPostCard data={post} />
      </Modal>
    </>
  );
};

export default UserPosts;
