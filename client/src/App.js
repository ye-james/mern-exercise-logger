import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Home from './components/layout/Home';
import NavBar from './components/layout/NavBar';
import ExerciseLog from './components/log/ExerciseLog'
import Explore from './components/explore/Explore';
import Footer from './components/layout/Footer'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup.js';
import ExerciseForm from './components/log/ExerciseForm';
import Routine from './components/routine/Routine';


const containerStyles = { 
    height: '80%',
    margin: '4em 0 4em 0'
}

const App = () => {
    return (
        <>
        <NavBar/>
        <Container style={containerStyles}>

            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/log/:userId' component={ExerciseLog} exact />
                <Route path={'/log/edit/:exerciseId'} component={ExerciseForm}/>
                <Route path={'/log/add'} component={ExerciseForm} exact/>
                <Route path='/explore' component={Explore}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/routine' component={Routine}/>
            </Switch>
        </Container>
        <Footer/>
        </>
    )
}


export default App;