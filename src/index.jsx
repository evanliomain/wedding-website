/* global module, require, process */

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { App }          from './components/App';
import storeBoostrapper from './store-boostrapper';
import { renderComponent } from './app-helpers';


import './main.less';


const store = storeBoostrapper();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

window.onload = () => renderComponent(
  App,
  store,
  history,
  document.getElementById('app')
);

// Hot Module Replacement API
if ('production' !== process.env.NODE_ENV && module.hot) {
  hotReload(store);
}


function hotReload(storeInstance) {
  module.hot.accept('./components/App', () => renderComponent(
    require('./components/App').App,
    storeInstance,
    history,
    document.getElementById('app')
  ));
}
