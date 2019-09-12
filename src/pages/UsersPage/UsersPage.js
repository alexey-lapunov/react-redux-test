import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersList } from '../../store/users/thunks';

import UserTable from './../../components/UserTable';

import styles from './styles.module.scss';

class UsersPage extends React.Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.props
      .fetchUsersList()
      .then(data => this.setState({ usersList: data }));
  }

  showLoading = () => <span>Loading...</span>;

  showError = () => <span>Error =(</span>;

  showContent = () => {
    const { usersList } = this.state;
    const { history } = this.props;

    return <UserTable usersList={usersList} history={history} />;
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
