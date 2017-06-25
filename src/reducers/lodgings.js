import { LODGINGS } from '../data/positions';
import { DEFAULT_TAB } from './defaultValues';

export const lodgings = (
  state = { lodgings : getDefaultLodgings() },
  action
) => {
  console.log('lodgings.state', state);
  console.log('lodgings.action', action);

  switch (action.type) {
  case 'LODGING_TAB_CHANGE':
    return {
      ...state,
      lodgings : filterLodgingBy(action.tab)
    };

  default:
    return state;
  }
};

function getDefaultLodgings() {
  return filterLodgingBy(DEFAULT_TAB);
}

function filterLodgingBy(lodgingType) {
  return LODGINGS
    .filter(({ type }) => 'all' === lodgingType || type === lodgingType);
}
