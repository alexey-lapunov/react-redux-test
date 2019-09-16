import React from 'react';

import styles from './styles.module.scss';
import { ReactComponent as NoPhotoIcon } from './../../svg/noPhoto.svg';

const PostCard = ({ title, picture, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <div className={styles.border} />
    <div className={styles.picture}>
      {picture ? (
        <img src={NoPhotoIcon} alt=""></img>
      ) : (
        <NoPhotoIcon className={styles.pictureStub} />
      )}
    </div>
    <div className={styles.body}>
      <span className={styles.title}>{title}</span>
    </div>
  </div>
);

export default PostCard;
