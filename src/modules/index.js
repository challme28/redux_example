import {combineReducers} from 'redux';
import todos from './todo/duck';
import visibilityFilter from './filter/duck';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default rootReducer;