import React from 'react';

import styles from './styles.module.scss';

const Row = ({ children, onClick }) => {
  return (
    <tr className={styles.row} onClick={onClick}>
      {children}
    </tr>
  );
};

export default Row;
