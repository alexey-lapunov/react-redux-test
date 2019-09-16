import React from 'react';

import styles from './styles.module.scss';
import { ReactComponent as NoPhotoIcon } from './../../svg/noPhoto.svg';

const UserCard = ({ userData }) => {
  const {
    name,
    username,
    email,
    website,
    photo = null,
    company: { name: companyName } = {}
  } = userData;

  return (
    <div className={styles.userCard}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.photo}>
            {photo ? (
              <img src={photo} alt="" />
            ) : (
              <NoPhotoIcon className={styles.photoStub} />
            )}
          </div>
          <div className={styles.info}>
            <div className={styles.header}>
              <span className={styles.userName}>{username}</span>
              <span className={styles.name}>{name}</span>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <span className={styles.label}>website</span>
                <a href={website} className={styles.text}>
                  {website}
                </a>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>company</span>
                <span className={styles.text}>{companyName}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>email</span>
                <a href={`mailto:${email}`} className={styles.text}>
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
