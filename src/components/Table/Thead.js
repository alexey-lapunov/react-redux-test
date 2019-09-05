import React from 'react';

import styles from './styles.module.scss';

const Thead = ({ children }) => {
  return <thead className={styles.thead}>{children}</thead>;
};

export default Thead;
