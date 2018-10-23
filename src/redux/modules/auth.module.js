const SET_USER = 'auth/SET_USER';
const AUTH_ERR = 'auth/AUTH_ERR';

const initialState = {
  user: {},
  err: undefined,
};

export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    user,
  });
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      }
    case AUTH_ERR:
      return {
        ...state,
        err: action.err,
      }
    default:
      return state;
  }
};
