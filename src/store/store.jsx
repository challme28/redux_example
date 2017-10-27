import {createStore} from 'redux';
import rootReducer from '../modules/index';
import {todosStateType} from "../modules/todo/duck";

const configureStore = (initialState?: todosStateType) =>{
  return createStore(rootReducer, initialState);
};

export default configureStore;
