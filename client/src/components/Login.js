import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Container, Grid, Form, Button, Header } from 'semantic-ui-react'
import { loginUser } from '../redux/actions/user';

const containerStyles = {
    width: '20%',
    height: '80vh',
    paddingTop: '1em'
}


const Login = () => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    const handleUserLogin = () => {
        dispatch(loginUser(user))
    }

    return (
        <Container style={containerStyles}>
            <Grid>
                <Grid.Row>
                <Header as='h1'>
                    Login to see your current progress
                </Header>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column centered columns={16}>
                        <Form onSubmit={handleUserLogin}>
                        <Form.Input label="Username"  name='username' onChange={e => setUser( {...user, username: e.target.value}) }/>
                            <Form.Input label="Password" type="password" onChange={e => setUser( {...user, password: e.target.value}) }/>
                            <span>Not a member? </span><a href="/user/signup">Sign up here</a>     
                            <Form.Input type="submit" control={Button} content='Login'/>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Login;
