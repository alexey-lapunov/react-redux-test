import React from 'react';

import styles from './styles.module.scss';

const Nav = ({ children }) => {
  return <div className={styles.nav}>{children}</div>;
};

export default Nav;
