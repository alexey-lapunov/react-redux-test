import React from 'react';

import { connect } from 'react-redux';
import { featchUserTodos } from './../../store/user/thunks';
import TodoTable from './../../components/TodoTable';

import styles from './styles.module.scss';

class UserTodosPage extends React.Component {
  componentDidMount() {
    this.props.featchUserTodos(this.props.userId);
  }

  render() {
    const {
      todos: { data, isFetching }
    } = this.props;

    return (
      <div className={styles.todosPage}>
        {isFetching ? <span>Loading...</span> : <TodoTable data={data} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: {
    data: state.user.todos.data,
    isFetching: state.user.todos.isFetching,
    error: state.user.todos.error
  }
});

const mapDispatchToProps = dispatch => ({
  featchUserTodos: id => dispatch(featchUserTodos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTodosPage);
