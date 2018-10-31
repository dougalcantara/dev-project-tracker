const SET_NAV_DRAWER = 'ui/SET_NAV_DRAWER';
const SET_HEADER_HEIGHT = 'ui/SET_HEADER_HEIGHT';
const SET_INTERIOR_RENDER = 'ui/SET_INTERIOR_RENDER';

const initialState = {
  navDrawerIsOpen: false,
  headerHeight: 0,
  renderInterior: false,
};

export const toggleNavState = () => dispatch => dispatch({ type: SET_NAV_DRAWER });
export const setHeaderHeight = headerHeight => dispatch => dispatch({ type: SET_HEADER_HEIGHT, headerHeight });
export const setRenderInterior = bool => dispatch => dispatch({ type: SET_INTERIOR_RENDER, renderInterior: bool });

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_NAV_DRAWER:
      return {
        ...state,
        navDrawerIsOpen: !state.navDrawerIsOpen,
      }
    case SET_HEADER_HEIGHT:
      return {
        ...state,
        headerHeight: action.headerHeight,
      }
    case SET_INTERIOR_RENDER:
      return {
        ...state,
        renderInterior: action.renderInterior,
      }
    default:
      return state;
  }
};
