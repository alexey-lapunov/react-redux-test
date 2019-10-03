import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';

class Modal extends React.Component {
  render() {
    const { children, isOpen, onClose } = this.props;

    return isOpen
      ? ReactDOM.createPortal(
          <div className={styles.modal} onClick={onClose}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
              {children}
            </div>
          </div>,
          document.body
        )
      : null;
  }
}

export default Modal;
