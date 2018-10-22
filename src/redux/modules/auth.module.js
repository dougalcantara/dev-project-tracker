import { $auth } from '../../firebase';

const SET_USER = 'auth/SET_USER';
const AUTH_ERR = 'auth/AUTH_ERR';

const initialState = {
  user: {},
  err: undefined,
};

export const setUser = (event, user) => async dispatch => {
  event.preventDefault();

  let authResponse;

  try {
    authResponse = await $auth.signInWithEmailAndPassword(user.email, user.password);
  } catch (err) {
    dispatch({
      type: AUTH_ERR,
      err,
    });
  }

  dispatch({
    type: SET_USER,
    user: authResponse.user,
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
