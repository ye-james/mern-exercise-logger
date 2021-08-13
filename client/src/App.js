import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/layout/Home';
import NavBar from './components/layout/NavBar';
import ExerciseLog from './components/log/ExerciseLog';
import Explore from './components/explore/Explore';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup.js';
import ExerciseForm from './components/log/ExerciseForm';
import Routine from './components/routine/Routine';
import PrivateRoute from './components/routing/PrivateRoute';
import { getUserInfo } from './redux/actions/auth';
import store from './store';

const containerStyles = {
  height: '80%',
  margin: '4em 0 4em 0',
};

const persistor = persistStore(store);

const App = () => {

  useEffect(() => {
    store.dispatch(getUserInfo());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <NavBar />
          <Container style={containerStyles}>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/explore' component={Explore} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <PrivateRoute path='/routine' component={Routine} />
              <PrivateRoute path='/log/:userId' component={ExerciseLog} exact />
              <PrivateRoute path={'/log/edit/:exerciseId'} component={ExerciseForm} />
              <PrivateRoute path={'/log/add'} component={ExerciseForm} exact />
            </Switch>
          </Container>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
