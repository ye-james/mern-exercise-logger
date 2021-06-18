import * as api from '../../api';


export const signupUser = (user) => async (dispatch) => {
    try {
        const result = await api.signupUser(user);
        dispatch({type: 'USER_SIGNUP', payload: result.data})
    } catch (err) {
        console.log(err)
    }
}

export const loginUser = (user, history) => async (dispatch) => {
    try {
        const result = await api.loginUser(user);
        const { data } = result.data;
     
        dispatch({type: 'LOGIN_SUCCESS', payload: data})
        history.push('/')
    } catch (err) {
        console.log(err)
    }
}

export const logoutUser = (history) => async (dispatch) => {
    dispatch({type: 'LOGOUT_SUCCESS'})
    history.push('/');
}