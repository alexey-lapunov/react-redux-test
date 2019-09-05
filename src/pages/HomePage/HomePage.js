import React from 'react';

import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        <span>Welcome to my</span> React-Redux application =)
      </h1>
    </div>
  );
};

export default HomePage;
