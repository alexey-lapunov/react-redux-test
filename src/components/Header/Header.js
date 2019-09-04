import React from 'react';
import styles from './styles.module.scss';

const Header = ({ onIsOpenMenu }) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}></div>
          <button
            type="button"
            className={styles.burger}
            onClick={() => onIsOpenMenu(true)}
          >
            <span className={styles.burgerLine} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
