import { combineReducers } from 'redux';

import logs from './logs'
import exercises from './exercises'

export default combineReducers({
    logs,
    exercises
})