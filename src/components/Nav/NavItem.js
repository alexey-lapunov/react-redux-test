import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const NavItem = ({ to, text }) => {
  return (
    <div className={styles.item}>
      <NavLink
        to={to}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default NavItem;
