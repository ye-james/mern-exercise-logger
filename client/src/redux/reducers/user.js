const initalState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null}


export default (state = initalState, action) => {
    switch(action.type) {
        case 'USER_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_LOADED': 
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case 'LOGIN_SUCCESS': 
            localStorage.setItem('profile', JSON.stringify(action.payload))
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: JSON.parse(localStorage.getItem('profile'))
            } 
        case 'SIGNUP_SUCCESS': 
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case 'AUTH_ERROR':
            return;
        case 'LOGIN_FAIL':
            return;
        case 'LOGOUT_SUCCESS':
            localStorage.clear();
            return { ...state,
                token: null,
                user: null,
                isAuthenticated: null
            }
            return;
        case 'REGISTER_FAIL':
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default: 
            return state;
    }
}