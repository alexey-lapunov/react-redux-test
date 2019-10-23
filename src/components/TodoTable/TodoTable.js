import React from 'react';
import cloneDeep from 'clone-deep';

import { Table, Thead, Tbody, Row, Cell } from './../Table';

import styles from './styles.module.scss';

class TodoTable extends React.Component {
  state = {
    data: this.props.data || [],
    sortByCompletedDirection: true
  };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.props.data });
    }
  }

  sortByCompleted = () => {
    const { data, sortByCompletedDirection: sortDirection } = this.state;
    const sortedData = cloneDeep(data).sort((a, b) => {
      return sortDirection
        ? Number(b.completed) - Number(a.completed)
        : Number(a.completed) - Number(b.completed);
    });

    this.setState({
      data: sortedData,
      sortByCompletedDirection: !sortDirection
    });
  };

  render() {
    const { data } = this.state;
    return (
      <Table>
        <Thead>
          <Row>
            <Cell>Todo title</Cell>
            <Cell onClick={this.sortByCompleted}>sort by Completed</Cell>
          </Row>
        </Thead>
        <Tbody>
          {data.map(todo => (
            <Row key={todo.id}>
              <Cell>
                <span className={styles.todo}>{todo.title}</span>
              </Cell>
              <Cell>
                <svg className={styles.icon} viewBox="0 0 55.702 55.702">
                  <path d="M27.851,0C12.494,0,0,12.494,0,27.851s12.494,27.851,27.851,27.851s27.851-12.494,27.851-27.851    C55.701,12.494,43.208,0,27.851,0z M27.851,51.213c-12.882,0-23.362-10.48-23.362-23.363c0-12.882,10.48-23.362,23.362-23.362    s23.362,10.481,23.362,23.363S40.733,51.213,27.851,51.213z" />
                  {todo.completed && (
                    <path d="M36.729,18.97l-13,13.001l-4.757-4.757c-0.876-0.877-2.297-0.877-3.173,0    c-0.877,0.876-0.877,2.297,0,3.173l6.344,6.344c0.438,0.438,1.013,0.658,1.587,0.658s1.148-0.219,1.586-0.658l14.587-14.587    c0.876-0.877,0.876-2.297,0-3.174C39.026,18.094,37.606,18.094,36.729,18.97z" />
                  )}
                </svg>
              </Cell>
            </Row>
          ))}
        </Tbody>
      </Table>
    );
  }
}

export default TodoTable;
