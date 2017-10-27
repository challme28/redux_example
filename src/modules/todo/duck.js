// @flow
//Actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

type actionType = {
  +type: string,
  +id?: number,
  +text?: string,
  +filter?: string,
}

export type todosStateType = Array<{
  +id?: number,
  +text?: string,
  +completed?: boolean
}>

let nextTodoId = 0;
const initialState = [];

//Action creators
export function addTodo(text: string): actionType {
  return {
    type: ADD_TODO,
    text,
  }
}

export function toggleTodo(id: number): actionType {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export const actions = {
  ADD_TODO,
  TOGGLE_TODO,
  addTodo,
  toggleTodo
};

//Reducer
export default function todo(state: todosStateType = initialState, action: actionType): todosStateType {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: ++nextTodoId,
          text: action.text,
          completed: false,
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo);
    default:
      return state;
  }
}