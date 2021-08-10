import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Grid, Form, Button, Header } from 'semantic-ui-react';
import { loginUser } from '../redux/actions/user';

const containerStyles = {
  width: '20%',
  height: '80vh',
  paddingTop: '1em',
};

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserLogin = () => {
    dispatch(loginUser(formData, history));
  };

  return (
    <Container style={containerStyles}>
      <Grid>
        <Grid.Row>
          <Header as='h1'>Login to see your current progress</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column centered="true" columns={16}>
            <Form onSubmit={handleUserLogin}>
              <Form.Input
                label='Username'
                name='username'
                onChange={e =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <Form.Input
                label='Password'
                type='password'
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span>Not a member? </span>
              <a href='/user/signup'>Sign up here</a>
              <Form.Input type='submit' control={Button} content='Login' />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Login;
