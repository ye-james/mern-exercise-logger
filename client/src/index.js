import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';

import rootReducer from './redux/reducers';


const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), );
const persistor = persistStore(store);

ReactDOM.render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
,
  document.getElementById('root')
);

