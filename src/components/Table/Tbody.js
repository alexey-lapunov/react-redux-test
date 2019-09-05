import React from 'react';

import styles from './styles.module.scss';

const Tbody = ({ children }) => {
  return <tbody className={styles.tbody}>{children}</tbody>;
};

export default Tbody;
