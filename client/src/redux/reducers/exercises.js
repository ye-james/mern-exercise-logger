import { FETCH_EXERCISES, ADD_ROUTINE } from "../actions/types";

const exercises = (state=[], action) => {
    switch(action.type) {
        case FETCH_EXERCISES:
            return {
                ...state,
                exercises: action.payload
            }
        case ADD_ROUTINE: 
            return {
                ...state,
                routine: action.payload
            }
        default:
            return state;
    }
}

export default exercises;