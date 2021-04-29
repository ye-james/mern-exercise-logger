import React from 'react'
import NavBar from './components/NavBar';
import ExerciseLog from './components/ExerciseLog'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';

const App = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/log' component={ExerciseLog}/>
                <Route path='/explore' component={Explore}/>
            </Switch>
        </div>
    )
}


export default App;