import * as api from '../../api';


export const signupUser = (user) => async (dispatch) => {
    try {
        const result = await api.signupUser(user);
        dispatch({type: 'SIGNUP_SUCCESS', payload: result.data})
    } catch (err) {
        console.log(err)
    }
}

export const loginUser = (user, history) => async (dispatch) => {
    try {
        const result = await api.loginUser(user);
        dispatch({type: 'LOGIN_SUCCESS', payload: result.data})
        history.push('/')
    } catch (err) {
        console.log(err)
    }
}

export const logoutUser = (history) => async (dispatch) => {
    dispatch({type: 'LOGOUT_SUCCESS'})
    history.push('/');
}