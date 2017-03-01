/* global process */

import React from 'react';

import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { getRoutingComponent } from './routing';

export const renderComponent = (Component, storeInstance, history, mountPoint) => {
  if ('production' === process.env.NODE_ENV) {
    return render(
      getRoutingComponent(storeInstance, history, Component),
      mountPoint
    );
  }
  return render(
    <AppContainer>
      {getRoutingComponent(storeInstance, history, Component)}
    </AppContainer>,
    mountPoint
  );
};
