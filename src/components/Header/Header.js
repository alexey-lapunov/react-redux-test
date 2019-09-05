import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = ({ onIsOpenMenu }) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}></Link>
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
