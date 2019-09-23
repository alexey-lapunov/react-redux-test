import React from 'react';

import styles from './styles.module.scss';

const Cell = ({ onClick, children }) => {
  return (
    <td onClick={onClick} className={styles.cel}>
      {children}
    </td>
  );
};

export default Cell;
