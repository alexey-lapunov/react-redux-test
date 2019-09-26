import React from 'react';
import { connect } from 'react-redux';
import clonedeep from 'clone-deep';

import { fetchUsersList } from '../../store/users/thunks';

import UserTable from './../../components/UserTable';

import styles from './styles.module.scss';
class UsersPage extends React.Component {
  state = {
    usersList: [],
    directionSortByName: -1
  };

  componentDidMount() {
    this.props
      .fetchUsersList()
      .then(data => this.setState({ usersList: data }));
  }

  onSortByName = () => {
    const { usersList, directionSortByName } = this.state;
    const cloneUsersList = clonedeep(usersList);
    let newDirectionSortByName;

    cloneUsersList.sort((a, b) => {
      switch (directionSortByName) {
        case -1:
          newDirectionSortByName = 0;
          return a.name < b.name ? 1 : -1;
        case 0:
          newDirectionSortByName = 1;
          return a.name > b.name ? 1 : -1;
        default:
          newDirectionSortByName = -1;
          return Math.random() - 0.5;
      }
    });

    this.setState({
      usersList: cloneUsersList,
      directionSortByName: newDirectionSortByName
    });
  };

  // render methods
  showLoading = () => <span>Loading...</span>;

  showError = () => <span>Error =(</span>;

  showContent = () => {
    const { usersList, directionSortByName } = this.state;
    const { history } = this.props;

    return (
      <UserTable
        usersList={usersList}
        history={history}
        onSortByName={this.onSortByName}
        directionSortByName={directionSortByName}
      />
    );
  };

  renderFunction = () => {
    const { isFetching, error } = this.props;

    if (isFetching) return this.showLoading();
    if (error) return this.showError();

    return this.showContent();
  };

  render() {
    return (
      <div className={styles.users}>
        <div className={styles.container}>
          <h2 className={styles.title}>Users list</h2>
          {this.renderFunction()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usersList: state.users.people,
    error: state.users.error,
    isFetching: state.users.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersList: () => dispatch(fetchUsersList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
