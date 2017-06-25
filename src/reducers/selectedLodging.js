export const selectedLodging = (
  state = {
    selectedLodging : undefined,
    hoverLodging : undefined
  },
  action
) => {
  switch (action.type) {
  case 'LODGING_SELECTED':
    return {
      ...state,
      selectedLodging : action.lodging
    };

  case 'LODGING_HOVER':
    return {
      ...state,
      hoverLodging : action.lodging
    };

  default:
    return state;
  }
};
