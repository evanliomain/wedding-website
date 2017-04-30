import React from 'react';
import { Provider } from 'react-redux';

// import { Router, Route, IndexRoute } from 'react-router';

import { Summary, Costume, Lodging } from './content';

import { Partners } from './components/Partners/Partners';

export const getRoutingComponent = (storeInstance, history, RootComponent) =>
  <Provider store={storeInstance}>
    <RootComponent>
      <Summary id="summary" />
      <Costume />
      <Lodging />
      <Partners />
    </RootComponent>
  </Provider>;
