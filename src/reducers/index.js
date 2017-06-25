import { combineReducers } from 'redux';

import { scroll } from './scroll';
import { tab } from './tab';
import { lodgings } from './lodgings';
import { selectedLodging } from './selectedLodging';
import { lodgingDirection } from './lodgingDirection';

export default combineReducers({
  scroll,
  tab,
  lodgings,
  selectedLodging,
  lodgingDirection
});
