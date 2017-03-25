import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { Summary, Costume, Lodging } from './content';

export const getRoutingComponent = (storeInstance, history, RootComponent) =>
  <Provider store={storeInstance}>
    <RootComponent>
      <Summary id="summary" />
      <Costume />
      <Lodging />
    </RootComponent>
  </Provider>;


  /*
  <Provider store={storeInstance}>
    <Router history={history}>
      <Route path="/" component={RootComponent}>{routes}</Route>
    </Router>
  </Provider>;


const routes = [
  <IndexRoute component={contents.summary} />,
  <Route path="costume" component={contents.costume} />,
  <Route path="lodging" component={contents.lodging} />
];*/


// const Summary = contents.summary,
//       Costume = contents.costume,
//       Lodging = contents.lodging;
