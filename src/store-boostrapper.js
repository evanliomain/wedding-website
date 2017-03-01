/* global module, require, process */

import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducers from './reducers';

export default function() {

  const store = createStore(
    combineReducers({
      app     : reducers,
      routing : routerReducer
    })
  );

  // Hot Module Replacement API
  if ('production' !== process.env.NODE_ENV && module.hot) {
    hotReload(store);
  }

  return store;
}


function hotReload(store) {
  module.hot.accept('./reducers/index', () => {
    store.replaceReducer(require('./reducers/index').default);
    store.dispatch({ type : 'RELOAD' });
  });
}
