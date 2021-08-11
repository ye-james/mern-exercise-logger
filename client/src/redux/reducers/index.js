import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import logs from './logs'
import exercises from './exercises'
import auth from './auth'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    logs,
    exercises,
    auth
})

export default persistReducer(persistConfig, rootReducer);