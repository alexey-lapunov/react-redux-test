import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';

const Modal = ({ isOpen, children }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className={styles.modal}>{children}</div>,
        document.body
      )
    : null;
};

export default Modal;
