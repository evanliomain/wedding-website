import React from 'react';

import { Route, IndexRoute } from 'react-router';
import { Page } from '../helper/page';

import summary from './01_summary.md';
import costume from './02_costume.md';
import lodging from './03_lodging.md';

const Summary = Page(summary),
      Costume = Page(costume),
      Lodging = Page(lodging);

export default [
  <IndexRoute component={Summary} />,
  <Route path="costume" component={Costume} />,
  <Route path="lodging" component={Lodging} />
];
