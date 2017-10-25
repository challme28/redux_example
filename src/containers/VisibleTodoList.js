// @flow
import {connect} from 'react-redux';
import {toggleTodo} from "../actions/index";
import TodoList from '../components/TodoList';

type Todos = Array<{
  +id: number,
  +completed: boolean,
  +text: string,
}>

export type State = {
  +todos: Todos,
  +visibilityFilter: string,
}

const getVisibleTodos = (todos: Todos, filter: string): Todos => {
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

const mapStateToProps = (state: State): Todos => {
  return getVisibleTodos(state.todos, state.visibilityFilter)
};

const mapDispatchToProps = (dispatch: Function): Function => {
  return id => dispatch(toggleTodo(id))
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;