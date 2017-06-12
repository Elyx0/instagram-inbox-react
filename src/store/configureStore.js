import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import initialReducer from '../reducers';

const engine = createEngine('state');
const rootReducer = storage.reducer(initialReducer);
const storageMiddleware = storage.createMiddleware(engine, ["@@router/LOCATION_CHANGE"]);

const history = createHashHistory();
const router = routerMiddleware(history);

const middlewares = [thunk, router, storageMiddleware];
const enhancers = [];

const logger = createLogger({
  level: 'info',
  collapsed: true
});

if (process.env.NODE_ENV !== 'production') { // Without webpack???
  const devToolsExtension = window.devToolsExtension
  middlewares.push(logger);
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

const load = storage.createLoader(engine);

export { history, configureStore, load };
