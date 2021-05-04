export default (state = [], action) => {
    switch(action.type) {
        case 'GET_LOG':
            return [...state, action.payload]
        case 'ADD_EXERCISE':
            return [...state, action.payload]
        default:
            return state;
    }
}

