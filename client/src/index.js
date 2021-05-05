import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';

import reducers from './redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), );
ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
,
  document.getElementById('root')
);

