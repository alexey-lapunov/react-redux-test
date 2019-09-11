import React from 'react';

import { Table, Thead, Tbody, Row, Cell } from './../Table';

const UserTable = ({ usersList, history }) => {
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
          <Row key={user.id} onClick={() => history.push(`/users/${user.id}`)}>
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

export default UserTable;
