import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';

class Modal extends React.Component {
  state = {
    isOpen: this.props.isOpen
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return isOpen
      ? ReactDOM.createPortal(
          <div className={styles.modal} onClick={this.onClose}>
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
