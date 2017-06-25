import { combineReducers } from 'redux';

import { scroll } from './scroll';
import { tab } from './tab';

export default combineReducers({
  scroll,
  tab
});
