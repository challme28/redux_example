// @flow
let nextTodoId: number = 0;

export function addTodo(text: string) {
  return {
    type: 'ADD-TODO',
    id: nextTodoId++,
    text,
  }
}

export const setVisibilityFilter = (filter: string) => {
  return {
    type: 'SET-VISIBILITY-FILTER',
    filter,
  }
};

export const toggleTodo = (id: number) => {
  return {
    type: 'TOGGLE-TODO',
    id,
  }
};