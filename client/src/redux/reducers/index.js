import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import logs from './logs'
import exercises from './exercises'
import user from './user'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}



const rootReducer = combineReducers({
    logs,
    exercises,
    user
})

export default persistReducer(persistConfig, rootReducer);