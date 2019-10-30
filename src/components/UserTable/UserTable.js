import React from 'react';
import classnames from 'classnames';

import { Table, Thead, Tbody, Row, Cell } from './../Table';

import styles from './styles.module.scss';

const UserTable = ({
  usersList,
  history,
  onSortByName,
  directionSortByName
}) => {
  return (
    <Table>
      <Thead>
        <Row>
          <Cell onClick={onSortByName}>
            <span className={styles.sortText}>
              sort by Name
              <span
                className={classnames(styles.arrow, {
                  [styles.arrowUp]: directionSortByName === 0,
                  [styles.arrowHidden]: directionSortByName === -1
                })}
              />
            </span>
          </Cell>
          <Cell>User Name</Cell>
          <Cell>City</Cell>
          <Cell>Company</Cell>
        </Row>
      </Thead>
      <Tbody>
        {usersList.map(user => (
          <Row
            key={user.id}
            onClick={() => history.push(`/users/${user.id}/posts`)}
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

export default UserTable;
