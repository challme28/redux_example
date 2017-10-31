import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actions as todoActions, todosStateType } from '../modules/todo/duck';
import { actions as visibilityFilterActions } from '../modules/filter/duck'
import { createLogger } from 'redux-logger';
import { rootEpic, rootReducer } from "../modules/index";

const configureStore = (initialState?: todosStateType) => {
  const middleware = [];
  const enhancers = [];

  //Redux observable
  const epic = createEpicMiddleware(rootEpic);
  middleware.push(epic);

  //Logger
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  const actionCreators = {
    ...todoActions,
    ...visibilityFilterActions
  };

  const composeEnhancers = composeWithDevTools({
    actionCreators
  });

  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
