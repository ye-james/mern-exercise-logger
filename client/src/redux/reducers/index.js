import { combineReducers } from 'redux';

import logs from './logs'
import exercises from './exercises'
import user from './user'

export default combineReducers({
    logs,
    exercises,
    user
})