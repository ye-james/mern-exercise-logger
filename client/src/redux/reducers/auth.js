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
  errors: [],
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem(
        'profile',
        JSON.stringify({
          userId: payload.id,
          token: payload.token,
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
      localStorage.clear();
      return { ...state, user: null, isAuthenticated: null, errors: payload };
    case REGISTER_FAIL:
      localStorage.clear();
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default auth;
