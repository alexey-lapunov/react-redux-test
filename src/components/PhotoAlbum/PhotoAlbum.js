import React from 'react';
import { ReactComponent as NoPhotoIcon } from './../../svg/noPhoto.svg';

import styles from './styles.module.scss';

const PhotoAlbum = ({ picture = undefined, title }) => {
  return (
    <div className={styles.photoAlbum}>
      {picture ? (
        <div className={styles.picture} />
      ) : (
        <NoPhotoIcon className={styles.stub} />
      )}
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default PhotoAlbum;
