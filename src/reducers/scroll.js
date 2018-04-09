import { linear, ease } from '../helper/transform';

const duration = 300;

export const scroll = (
  state = { scroll : 0 },
  action
) => {
  switch (action.type) {
  case 'SCROLL_CHANGE':
    return {
      ...state,
      scroll : action.scroll,
      ...getHeaderScroll(state, action.scroll)
    };

  case 'RELOAD':
    return {
      ...state,
      ...getHeaderScroll(state, state.scroll)
    };

  default:
    return {
      ...state,
      ...getHeaderScroll(state, state.scroll)
    };
  }
};

function getHeaderScroll(state, position) {
  return getHeaderScrollState(position, state.scroll);
}

function getHeaderScrollState(position) {
  return {
    headerTranslate            : linear(0, -200, duration)(position),
    // -1 * Math.min(position, duration),
    headerFontSize             : linear(4, 1, duration)(position),
    headerLogoScale            : linear(1, 0.2, duration)(position),
    headerLogoWrapperWidth     : linear(250, 50, duration)(position),
    headerLogoWrapperTranslate : linear(4.5, -1, duration)(position),
    headerTitleScale           : linear(1, 0.4, duration)(position),
    headerTranslateX           : linear(0, -25, duration)(position),
    headerFontScale            : linear(1, 0.1, duration)(position),

    sideMenuTranslate : linear(16, 0, 600)(position)
  };
}
