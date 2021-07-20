export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_EXERCISES':
            return {
                ...state,
                exercises: action.payload
            }
        case 'ADD_ROUTINE': 
            return {
                ...state,
                routine: action.payload
            }
        default:
            return state;
    }
}