import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Form,
  Button,
  Header,
  Segment,
  Message,
} from 'semantic-ui-react';
import { loginUser } from '../../redux/actions/auth';

const containerStyles = {
  width: '50%',
  height: '80vh',
  paddingTop: '1em',
};

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorState, setErrorState] = useState({
    missingUsername: false,
    missingPassword: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserLogin = () => {
    if (formData.username === '' && formData.password === '') {
      setErrorState({
        ...errorState,
        missingUsername: true,
        missingPassword: true,
      });
    } else if (formData.username === '') {
      setErrorState({
        ...errorState,
        missingUsername: true,
      });
    } else if (formData.password === '') {
      setErrorState({
        ...errorState,
        missingPassword: true,
      });
    } else {
      dispatch(loginUser(formData, history));
    }
  };

  return (
    <Container style={containerStyles}>
      <Grid textAlign='left' verticalAlign='middle' style={{ height: '60vh' }}>
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as='h2' textAlign='center'>
            Login
          </Header>
          <Form size='large' onSubmit={handleUserLogin}>
            <Segment>
              <Form.Input
                label='Username'
                name='username'
                onChange={e => {
                  setFormData({ ...formData, username: e.target.value });
                  setErrorState({ ...errorState, missingUsername: false });
                }}
                error={
                  errorState.missingUsername
                    ? { content: 'Username is required!', pointing: 'above' }
                    : null
                }
              />
              <Form.Input
                label='Password'
                type='password'
                onChange={e => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrorState({ ...errorState, missingPassword: false });
                }}
                error={
                  errorState.missingPassword
                    ? { content: 'Password is required!', pointing: 'above' }
                    : null
                }
              />
              <Button>Login</Button>
            </Segment>
          </Form>
          <Message>
            Not a member? <Link to='/signup'>Sign up here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Login;
