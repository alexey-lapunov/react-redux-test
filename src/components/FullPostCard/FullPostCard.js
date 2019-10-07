import React from 'react';
import { ReactComponent as NoPhotoIcon } from './../../svg/noPhoto.svg';

import styles from './styles.module.scss';

const FullPostCard = ({ data, loading }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            <h3 className={styles.title}>{data.title}</h3>
            <span className={styles.dec}>{data.body}</span>
            <div className={styles.picture}>
              {data.img ? (
                <img src={data.img} alt="" />
              ) : (
                <NoPhotoIcon className={styles.pictureStub} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FullPostCard;
