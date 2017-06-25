export const selectedLodging = (
  state = { selectedLodging : undefined },
  action
) => {
  switch (action.type) {
  case 'LODGING_SELECTED':
    return {
      ...state,
      selectedLodging : action.lodging
    };

  default:
    return state;
  }
};
