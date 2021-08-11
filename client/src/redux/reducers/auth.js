import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGOUT,
} from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem(
        'profile',
        JSON.stringify({
          userId: action.payload.id,
          token: action.payload.token,
        })
      );

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AUTH_ERROR:
      return;
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: null, isAuthenticated: null };
    case LOGIN_FAIL:
    return;
    case REGISTER_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default auth;
