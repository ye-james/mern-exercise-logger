import React  from 'react'
import { Container, Grid, Form, Button, Header } from 'semantic-ui-react'

const containerStyles = {
    width: '20%',
    height: '80vh',
    paddingTop: '1em'
}


const Signup = () => {

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
                        <Form>
                            <Form.Input label="Username" />
                            <Form.Input label="Password" type="password"/>
                            <span>Not a member? </span><a href="/user/signup">Sign up here</a>  
                                
                            <Form.Input type="submit" control={Button} content='Login'/>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Signup
