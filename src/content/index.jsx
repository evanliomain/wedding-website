// import React from 'react';

// import { Route, IndexRoute } from 'react-router';
import { Page } from '../helper/page';

import summary from './01_summary.md';
import costume from './02_costume.md';
import lodging from './03_lodging.md';
import cagnotte from './04_cagnotte.md';


export const Summary = Page(summary);
export const Costume = Page(costume);
export const Lodging = Page(lodging);
export const Cagnotte = Page(cagnotte);

// export default [
//   <IndexRoute component={Summary} />,
//   <Route path="costume" component={Costume} />,
//   <Route path="lodging" component={Lodging} />
// ];
