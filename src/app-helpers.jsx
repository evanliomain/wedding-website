/* global process */

import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute } from 'react-router';

import { PageTest1 } from './components/PageTest1/PageTest1';
import { PageTest2 } from './components/PageTest2/PageTest2';


export const renderComponent = (Component, storeInstance, history, mountPoint) => {
  if ('production' === process.env.NODE_ENV) {
    return render(
      <Provider store={storeInstance}>
        <Router history={history}>
          <Component />
        </Router>
      </Provider>,
      mountPoint
    );
  }
  return render(
    <AppContainer>
      <Provider store={storeInstance}>
        <Router history={history}>
          <Route path="/" component={Component}>
            <IndexRoute component={PageTest1} />
            <Route path="about" component={PageTest2} />
          </Route>
        </Router>
      </Provider>
    </AppContainer>,
    mountPoint
  );

};
