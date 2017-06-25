import { combineReducers } from 'redux';

import { scroll } from './scroll';
import { tab } from './tab';
import { lodgings } from './lodgings';

export default combineReducers({
  scroll,
  tab,
  lodgings
});
