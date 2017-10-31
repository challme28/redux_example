import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import todos, { todoEpic } from './todo/duck';
import visibilityFilter from './filter/duck';

export const rootEpic = combineEpics(
  todoEpic
);
export const rootReducer = combineReducers({
  todos,
  visibilityFilter
});