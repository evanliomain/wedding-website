import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import contents from './content';

export const getRoutingComponent = (storeInstance, history, RootComponent) =>
  <Provider store={storeInstance}>
    <Router history={history}>
      <Route path="/" component={RootComponent}>{contents}</Route>
    </Router>
  </Provider>;
