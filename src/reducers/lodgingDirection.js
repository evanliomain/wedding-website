export const lodgingDirection = (
  state = {
    lodgingDirection : undefined
  },
  action
) => {
  switch (action.type) {
  case 'APPLY_DIRECTION':
    return {
      ...state,
      lodgingDirection : action.direction
    };

  default:
    return state;
  }
};
