import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Home from './components/Home';
import NavBar from './components/NavBar';
import ExerciseLog from './components/ExerciseLog'
import Explore from './components/Explore';
import Footer from './components/Footer'
import Login from './components/Login';
import Signup from './components/Signup.js';


const containerStyles = { 
    height: '80%',
    margin: '4em 0 4em 0'
}

const App = () => {
    return (
        <>
        <BrowserRouter>
            <NavBar/>
            <Container style={containerStyles}>

                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/log' component={ExerciseLog}/>
                    <Route path='/explore' component={Explore}/>
                    <Route path='/user/login' component={Login}/>
                    <Route path='/user/signup' component={Signup}/>
                </Switch>
            </Container>
            <Footer/>
        </BrowserRouter>
        </>
    )
}


export default App;