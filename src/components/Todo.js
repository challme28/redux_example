// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type todo = {
  onClick: Function,
  completed: boolean,
  text: string,
}

const Todo = ({onClick, completed, text}: todo) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;