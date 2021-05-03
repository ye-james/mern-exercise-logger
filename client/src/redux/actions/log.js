import * as api from '../../api';

//Action creators

export const getLog = () => async (dispatch) => {

    try {
        const {data} = await api.fetchLog();
        dispatch({ type: 'FETCH_LOG', payload: data});

    } catch (error) {
        console.log(error.message);
    }
}