import * as api from '../../api';


export const signupUser = (user) => async (dispatch) => {
    try {
        const result = await api.signupUser(user);
        dispatch({type: 'USER_SIGNUP', payload: result.data})
    } catch (err) {
        console.log(err)
    }
}

export const loginUser = (user) => async (dispatch) => {
    try {
        const result = await api.loginUser(user);
        dispatch({type: 'USER_LOGIN', payload: result.data})
    } catch (err) {
        console.log(err)
    }
}