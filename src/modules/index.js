import {combineReducers} from 'redux';
import todos from './todo/duck';
import visibilityFilter from './filter/duck';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;