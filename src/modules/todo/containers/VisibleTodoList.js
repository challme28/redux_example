// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { actions as ToggleAction } from "../duck";

import type { todosStateType } from '../duck';

export type State = {
  +todos: todosStateType,
  +visibilityFilter: string,
}

export function getVisibleTodos(todos: todosStateType, filter: string): todosStateType {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}

function mapStateToProps(state: State): {} {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch: Function): {} {
  return bindActionCreators(ToggleAction, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);