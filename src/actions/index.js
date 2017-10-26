// @flow
import type {actionType} from "../reducers/todos";

let nextTodoId: number = 0;

export function addTodo(text: string): actionType {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
}

export const setVisibilityFilter = (filter: string): actionType => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
};

export const toggleTodo = (id: number): actionType => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
};