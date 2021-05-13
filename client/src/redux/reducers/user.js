export const INITIAL_STATE = {
    loggedIn: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_SIGNUP':
            return state;
        default:
            return state;
    }
}

