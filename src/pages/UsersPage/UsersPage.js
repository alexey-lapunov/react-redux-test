import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersList } from '../../store/users/thunks';

import Table from './../../components/Table';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsersList();
  }

  render() {
    const { usersList } = this.props;
    const tableData = {
      columns: ['Name', 'User Name', 'City', 'Company'],
      rows: usersList.map(user => ({
        id: user.id,
        Name: user.name,
        'User Name': user.username,
        City: user.address.city,
        Company: user.company.name
      }))
    };

    return (
      <div>
        <Table data={tableData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usersList: state.people.entities,
    error: state.people.error,
    isFetching: state.people.isFetching
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
