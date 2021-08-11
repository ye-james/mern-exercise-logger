import * as api from '../../api';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from './types';

export const signupUser = user => async dispatch => {
  try {
    const result = await api.signupUser(user);
    dispatch({ type: REGISTER_SUCCESS, payload: result.data });
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({type: REGISTER_FAIL, payload: errors})
  }
};

export const loginUser = (user, history) => async dispatch => {
  try {
    const result = await api.loginUser(user);
    dispatch({ type: LOGIN_SUCCESS, payload: result.data });
    history.push('/');
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({type: LOGIN_FAIL, payload: errors})
  }
};

export const logoutUser = history => async dispatch => {
  dispatch({ type: LOGOUT });
  history.push('/');
};
