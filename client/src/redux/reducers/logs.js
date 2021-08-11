import {
    FETCH_LOG,
    ADD_EXERCISE,
    FETCH_SINGLE_EXERCISE,
    DELETE_EXERCISE,
  } from '../actions/types';

export const INITIAL_STATE = {
    logs: [],
    editExercise: null,
    successfullyAdded: false,
    successfullyDeleted: false
}

const logs = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_LOG:
            console.log('dispatched ')
            console.log(action.payload)
            return {
                ...state,
                logs: action.payload
            }
        case ADD_EXERCISE:
            console.log('Old state:', state.logs);
            const newState = [...state.logs, action.payload];
            console.log('New State: ', newState);
            return {
                ...state,
                logs: [...state.logs,action.payload],
                successfullyAdded: true
            }
        case FETCH_SINGLE_EXERCISE:
            console.log(action.payload);
            return {...state,
                editExercise: action.payload
            }
        case DELETE_EXERCISE:
            return {
                ...state, 
                logs: state.logs.filter(log => log._id !== action.payload),
                successfullyDeleted: true
            }
        default:
            return state;
    }
}

export default logs;
