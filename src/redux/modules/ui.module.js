const SET_NAV_DRAWER = 'ui/SET_NAV_DRAWER';

const initialState = {
  navDrawerIsOpen: false,
};

export const toggleNavState = () => dispatch => {
  dispatch({ type: SET_NAV_DRAWER });
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_NAV_DRAWER:
      return {
        ...state,
        navDrawerIsOpen: !state.navDrawerIsOpen,
      }
    default:
      return state;
  }
};
