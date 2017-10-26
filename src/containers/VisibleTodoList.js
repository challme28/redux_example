// @flow
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import { actions as ToggleAction } from "../modules/todo/duck";

import type todosStateType from '../modules/todo/duck';

export type State = {
  +todos: todosStateType,
  +visibilityFilter: string,
}

const getVisibleTodos = (todos: todosStateType, filter: string): todosStateType => {
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
};

const mapStateToProps = (state: State): {} => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch: Function): {} => {
  return bindActionCreators(ToggleAction, dispatch);
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;