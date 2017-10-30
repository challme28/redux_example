// @flow
//Actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const TODO_IS_LOADING = 'TODO_IS_LOADING';

type actionType = {
  +type: string,
  +id?: number,
  +text?: string,
  +filter?: string
}

export type todosStateType = Array<{
  +id?: number,
  +text?: string,
  +completed?: boolean
}>

let nextTodoId = 0;
const initialState = [];

//Action creators
export function addTodo(text: string, id: number): actionType {
  return {
    type: ADD_TODO,
    id,
    text,
  }
}

export function toggleTodo(id: number): actionType {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function todoIsLoading(id: number): actionType {
  return {
    type: TODO_IS_LOADING,
    id,
    text: "todo is loading..."
  }
}

export function addTodoAfterOneSeconds(text: string): Function {
  const id = ++nextTodoId;
  return (dispatch) => {
    dispatch(todoIsLoading(id));
    setTimeout(() => {
      dispatch(addTodo(text, id));
    }, 1000);
  }
}

export const actions = {
  ADD_TODO,
  TOGGLE_TODO,
  TODO_IS_LOADING,
  addTodo,
  toggleTodo,
  addTodoAfterOneSeconds,
};

//Reducer
export default function todo(state: todosStateType = initialState, action: actionType): todosStateType {
  switch (action.type) {
    case ADD_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, text: action.text}
          : todo);
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo);
    case TODO_IS_LOADING:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    default:
      return state;
  }
}