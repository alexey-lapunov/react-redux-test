import React from 'react';

import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Welcome to my</span> React-Redux application =)
        </h1>
        <span className={styles.desc}>Click on the burger menu</span>
      </div>
    </div>
  );
};

export default HomePage;
