const initalState = {
    user: null,
    isAuthenticated: null}


export default (state = initalState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': 
            localStorage.setItem('profile', JSON.stringify(action.payload))
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            } 
        case 'SIGNUP_SUCCESS': 
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        case 'AUTH_ERROR':
            return;
        case 'LOGIN_FAIL':
            return;
        case 'LOGOUT_SUCCESS':
            localStorage.clear();
            return { ...state,
                user: null,
                isAuthenticated: null
            }
        case 'REGISTER_FAIL':
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        default: 
            return state;
    }
}