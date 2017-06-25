import { DEFAULT_TAB } from './defaultValues';

export const tab = (
  state = { tab : DEFAULT_TAB },
  action
) => {
  switch (action.type) {
  case 'LODGING_TAB_CHANGE':
    return {
      ...state,
      tab : action.tab
    };

  default:
    return state;
  }
};
