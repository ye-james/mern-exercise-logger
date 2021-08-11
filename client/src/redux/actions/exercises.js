import { FETCH_EXERCISES, ADD_ROUTINE } from "../actions/types";

import * as api from '../../api';

export const getExercises = () => async (dispatch) => {

    try {
        const result = await api.getExercises();
        console.log(result.data);
        dispatch({type: FETCH_EXERCISES, payload: result.data})
    } catch (error) {
        console.log(error.message);
    }
}

export const addRoutine = (routine) => async dispatch => {
    try {
        const result = await api.saveRoutine(routine);
        dispatch({type: ADD_ROUTINE, payload: result.data})
    } catch(error) {
        console.log(error);
    }
}