import React from 'react';

import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.scss';

const BurgerMenu = ({ isOpen, onIsOpenMenu }) => {
  return (
    <div className={classnames(styles.menu, { [styles.menuOpen]: isOpen })}>
      <div className={styles.backdrop} onClick={() => onIsOpenMenu(false)} />
      <div className={styles.box}>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to="/"
                exact
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/users"
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
