import React from 'react';
import { Provider } from 'react-redux';

// import { Router, Route, IndexRoute } from 'react-router';

import { Summary, Costume, Lodging } from './content';

import { Costumes } from './components/Costumes/Costumes';
import { Partners } from './components/Partners/Partners';

import LodgingViewContainer from './containers/LodgingViewContainer';

export const getRoutingComponent = (storeInstance, history, RootComponent) =>
  <Provider store={storeInstance}>
    <RootComponent>
      <Summary id="summary" />
      <Costume />
      <Lodging />
      <LodgingViewContainer />
      <Costumes />
      <Partners />
    </RootComponent>
  </Provider>;
