import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}></div>
          <div className={styles.burger}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
