// @flow
type todosStateType =  Array<{
    +id?: number,
    +text?: string,
    +completed?: boolean,
  }>

export type actionType = {
  +type: string,
  +id?: number,
  +text?: string,
  +filter?: string,
}

const todos = (state: todosStateType = [], action: actionType): todosStateType => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo);
    default:
      return state;
  }
};

export default todos;