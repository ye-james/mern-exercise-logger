export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_EXERCISES':
            return {
                ...state,
                exercises: action.payload
            }
        default:
            return state;
    }
}