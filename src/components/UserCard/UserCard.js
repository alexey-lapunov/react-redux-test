import React from 'react';

import styles from './styles.module.scss';

const UserCard = ({ userData }) => {
  const {
    name,
    username,
    email,
    website,
    company: { name: companyName } = {}
  } = userData;

  return (
    <div className={styles.userCard}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.photo}></div>
          <div className={styles.info}>
            <div className={styles.header}>
              <span className={styles.userName}>{username}</span>
              <span className={styles.name}>{name}</span>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <span className={styles.label}>website</span>
                <span className={styles.text}>{website}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>company</span>
                <span className={styles.text}>{companyName}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>email</span>
                <span className={styles.text}>{email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
