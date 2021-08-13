import * as api from '../../api';
import {
  AUTH_ERROR,
  LOAD_USER_INFO,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from './types';

export const getUserInfo = () => async dispatch => {
  try {
    const res = await api.getUserInfo();

    dispatch({
      type: LOAD_USER_INFO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const signupUser = user => async dispatch => {
  try {
    const result = await api.signupUser(user);
    dispatch({ type: REGISTER_SUCCESS, payload: result.data });
    dispatch(getUserInfo());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({ type: REGISTER_FAIL, payload: errors });
  }
};

export const loginUser = (user, history) => async dispatch => {
  try {
    const result = await api.loginUser(user);
    dispatch({ type: LOGIN_SUCCESS, payload: result.data });

    dispatch(getUserInfo());
    history.push('/');
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({ type: LOGIN_FAIL, payload: errors });
  }
};

export const logoutUser = history => async dispatch => {
  dispatch({ type: LOGOUT });
  history.push('/');
};
