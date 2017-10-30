import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../modules/index';
import { todosStateType } from "../modules/todo/duck";

const configureStore = (initialState?: todosStateType) => {
  //Redux configuration
  const middleware = [];

  //Thunk middleware
  middleware.push(thunkMiddleware);

  //Logger middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware.push(logger);

  return createStore(rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware,logger));
};

export default configureStore;
