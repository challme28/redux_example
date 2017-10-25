// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'

export type todoList = {
  todos: Array<{
    +id: number,
    +completed: boolean,
    +text: string,
  }>,
  onTodoClick: Function,
}

const TodoList = ({todos, onTodoClick}: todoList) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;