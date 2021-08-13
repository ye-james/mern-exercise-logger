import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGOUT,
  LOAD_USER_INFO,
} from '../actions/types';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: null,
  errors: [],
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        ...payload,
      };
    case LOAD_USER_INFO:
      return {...state, isAuthenticated: true, user: payload}
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return { ...state, isAuthenticated: false, user: null, token: null };
    case LOGOUT:
      localStorage.removeItem('token');
      return { ...state, user: null, isAuthenticated: null, token: null };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        user: null,
        isAuthenticated: null,
        token: null,
        errors: payload,
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        user: null,
        isAuthenticated: false,
        errors: payload,
        token: null,
      };
    default:
      return state;
  }
};

export default auth;
