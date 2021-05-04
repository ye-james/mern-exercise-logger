import * as api from '../../api';
import axios from 'axios';


//Action creators

export const getLog = () => async (dispatch) => {

    try {
        const {data} = await api.fetchLog();
        dispatch({ type: 'FETCH_LOG', payload: data});

    } catch (error) {
        console.log(error.message);
    }
}

export const addExercise = (exercise) => async(dispatch) => {
    try{
        const result = await api.addExercise(exercise);
        dispatch({type: 'ADD_EXERCISE', payload: result.data})
    }
    catch (err) {
        console.log(err.message)
    }
}