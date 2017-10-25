// @flow
type State =  Array<{
    +id: number,
    +text: string,
    +completed: boolean,
  }>

type Action = {
  +type: string,
  +id: number,
  +text: string,
}

const todos = (state: State = [], action: Action) => {
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