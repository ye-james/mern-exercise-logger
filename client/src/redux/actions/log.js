import * as api from '../../api';
//Action creators

export const getLog = () => async (dispatch) => {

    try {
        const result = await api.fetchLog();
        console.log(result);
        dispatch({type: 'FETCH_LOG', payload: result.data});

    } catch (error) {
        console.log(error.message);
    }
}

export const addExercise = (exercise) => async(dispatch) => {
    try{
        const result = await api.addExercise(exercise);
        console.log(result);
        dispatch({type: 'ADD_EXERCISE', payload: result.data})
    }
    catch (err) {
        console.log(err.message)
    }
}

export const deleteExercise = id => async(dispatch) => {
    try {
        const result = await api.deleteExercise(id);
        dispatch({type: 'DELETE_EXERCISE', payload: id});

    } catch (err) {
        console.log(err.message);
    }
}