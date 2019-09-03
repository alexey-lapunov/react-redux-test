import React from 'react';

import UserPage from '../UsersPage';

//import Header from '../../components/Header';

import styles from './styles.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        {/* <Header /> */}
        <UserPage />
      </div>
    );
  }
}

export default App;
