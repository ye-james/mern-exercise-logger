export const INITIAL_STATE = {
    loggedIn: false,
    user: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_SIGNUP':
            return state;
        case 'USER_LOGIN':
            return {...state, user: action.payload}
        default:
            return state;
    }
}


