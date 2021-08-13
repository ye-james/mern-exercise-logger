import {
  FETCH_LOG,
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  FETCH_SINGLE_EXERCISE,
  DELETE_EXERCISE,
} from './types';

import * as api from '../../api';
//Action creators

export const getLog = (userId) => async dispatch => {
  try {
    const result = await api.fetchLog(userId);
    dispatch({ type: FETCH_LOG, payload: result.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addExercise = (exercise, userId) => async dispatch => {
  try {
    const result = await api.addExercise(exercise, userId);
    console.log(result);
    dispatch({ type: ADD_EXERCISE, payload: result.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateExercise = (exercise, id) => async dispatch => {
  try {
    const result = await api.updateExercise(exercise, id);
    dispatch({ type: UPDATE_EXERCISE, payload: result.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchCurrentExercise = id => async dispatch => {
  try {
    const result = await api.fetchCurrentExercise(id);
    dispatch({ type: FETCH_SINGLE_EXERCISE, payload: result.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteExercise = id => async dispatch => {
  try {
    await api.deleteExercise(id);
    dispatch({ type: DELETE_EXERCISE, payload: id });
  } catch (err) {
    console.log(err.message);
  }
};
