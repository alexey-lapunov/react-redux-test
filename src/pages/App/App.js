import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { onIsOpenBurgerMenu } from '../../store/app/actions';

import UserPage from '../UsersPage';
import HomePage from '../HomePage';

import Header from '../../components/Header';
import BurgerMenu from '../../components/BurgerMenu';

import styles from './styles.module.scss';

class App extends React.Component {
  render() {
    const { isOpenBurgerMenu, onIsOpenBurgerMenu } = this.props;

    return (
      <div className={styles.app}>
        <BrowserRouter>
          <Header onIsOpenMenu={onIsOpenBurgerMenu} />
          <BurgerMenu
            isOpen={isOpenBurgerMenu}
            onIsOpenMenu={onIsOpenBurgerMenu}
          />
          <div className={styles.navbarOuter}>
            <div className={styles.container}>
              <Route exact path="/" component={HomePage} />
              <Route path="/users" component={UserPage} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpenBurgerMenu: state.app.isOpenBurgerMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIsOpenBurgerMenu: bool => dispatch(onIsOpenBurgerMenu(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
