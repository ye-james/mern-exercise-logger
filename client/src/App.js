import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'

import Home from './components/Home';
import NavBar from './components/NavBar';
import ExerciseLog from './components/ExerciseLog'
import Explore from './components/Explore';
import Footer from './components/Footer'


const App = () => {
    return (
        <>
        <NavBar/>
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/log' component={ExerciseLog}/>
            <Route path='/explore' component={Explore}/>
        </Switch>
        <Footer/>
        </>
    )
}


export default App;