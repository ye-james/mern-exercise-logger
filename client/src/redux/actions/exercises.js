import * as api from '../../api';
import axios from 'axios';

export const getExercises = () => async (dispatch) => {

    try {
        const result = await api.getExercises();
        console.log(result.data);
        dispatch({type: 'FETCH_EXERCISES', payload: result.data})
    } catch (error) {
        console.log(error.message);
    }
}