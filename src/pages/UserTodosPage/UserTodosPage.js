import React from 'react';

import { connect } from 'react-redux';
import { featchUserTodos } from './../../store/user/thunks';

import styles from './styles.module.scss';

class UserTodosPage extends React.Component {
  componentDidMount() {
    this.props.featchUserTodos(this.props.userId);
  }

  render() {
    return (
      <div className={styles.todosPage}>
        {this.props.todos.isFetching ? (
          <span>Loading...</span>
        ) : (
          this.props.todos.data.map(todo => <span>{todo.title}</span>)
        )}
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
