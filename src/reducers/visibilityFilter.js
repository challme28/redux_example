// @flow
import type {actionType} from "../reducers/todos";

const visibilityFilter = ( state: string = 'SHOW_ALL', action: actionType): ?string => {
  switch (action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;