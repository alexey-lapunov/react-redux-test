import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersList } from '../../store/users/thunks';

import { Table, Thead, Tbody, Row, Cell } from './../../components/Table';

import styles from './styles.module.scss';

class UsersPage extends React.Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.props.fetchUsersList().then(usersList => this.setState({ usersList }));
  }

  showLoading = () => <span>Loading...</span>;

  showError = () => <span>Error =(</span>;

  showContent = () => {
    const { usersList } = this.state;
    const { history } = this.props;

    return (
      <Table>
        <Thead>
          <Row>
            <Cell>Name</Cell>
            <Cell>User Name</Cell>
            <Cell>City</Cell>
            <Cell>Company</Cell>
          </Row>
        </Thead>
        <Tbody>
          {usersList.map(user => (
            <Row
              key={user.id}
              onClick={() => history.push(`/users/${user.id}`)}
            >
              <Cell>{user.name}</Cell>
              <Cell>{user.username}</Cell>
              <Cell>{user.address.city}</Cell>
              <Cell>{user.company.name}</Cell>
            </Row>
          ))}
        </Tbody>
      </Table>
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
