export const tab = (
  state = { tab : 'gite' },
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
