import React from 'react';
import { Provider } from 'react-redux';

// import { Router, Route, IndexRoute } from 'react-router';

import { Summary, Costume, Lodging } from './content';

export const getRoutingComponent = (storeInstance, history, RootComponent) =>
  <Provider store={storeInstance}>
    <RootComponent>
      <Summary id="summary" />
      <Costume />
      <Lodging />
    </RootComponent>
  </Provider>;
