// @flow
//Actions
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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
export default function visibilityFilter(state: string = 'SHOW_ALL', action: actionType): ?string {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};