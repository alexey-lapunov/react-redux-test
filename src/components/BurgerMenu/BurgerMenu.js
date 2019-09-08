import React from 'react';

import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.scss';

const BurgerMenu = ({ isOpen, onIsOpenMenu }) => {
  const links = [
    {
      href: '/',
      text: 'Home'
    },
    {
      href: '/users',
      text: 'Users'
    },
    {
      href: '/posts',
      text: 'Posts'
    },
    {
      href: '/photos',
      text: 'Photos'
    }
  ];
  return (
    <div className={classnames(styles.menu, { [styles.menuOpen]: isOpen })}>
      <div className={styles.backdrop} onClick={() => onIsOpenMenu(false)} />
      <div className={styles.box}>
        <div className={styles.content}>
          <ul className={styles.list}>
            {links.map((link, key) => (
              <li key={key} className={styles.item}>
                <NavLink
                  to={link.href}
                  exact
                  className={styles.link}
                  activeClassName={styles.linkActive}
                  onClick={() => onIsOpenMenu(false)}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
