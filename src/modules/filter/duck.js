// @flow
//Actions
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const DEFAULT_STATE = 'SHOW_ALL';

type actionType = {
  +type: string,
  +filter: string
}

//Action creators
export function setVisibilityFilter(filter: string): actionType {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}

export const actions = {
  SET_VISIBILITY_FILTER,
  setVisibilityFilter
};

//Reducer
export default function visibilityFilter(state: string = DEFAULT_STATE, action: actionType): ?string {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};