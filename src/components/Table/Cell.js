import React from 'react';

import styles from './styles.module.scss';

const Cell = ({ children }) => {
  return <td className={styles.cel}>{children}</td>;
};

export default Cell;
