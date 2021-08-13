import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Grid, Form, Button, Header } from 'semantic-ui-react';
import { loginUser } from '../../redux/actions/auth';

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

  const [errorState, setErrorState] = useState({
    missingUsername: false,
    missingPassword: false
  })

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserLogin = () => {
    if (formData.username === '' && formData.password === '') {
      setErrorState({
        ...errorState,
        missingUsername: true,
        missingPassword: true
      })
    } else if (formData.username === '') {
      setErrorState({
        ...errorState,
        missingUsername: true
      })
    } else if (formData.password === '') {
      setErrorState({
        ...errorState,
        missingPassword: true
      })
    }
    else {
      dispatch(loginUser(formData, history));
    }
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
                onChange={e => {
                  setFormData({ ...formData, username: e.target.value })
                  setErrorState({...errorState, missingUsername: false})
                }
              }
                error={errorState.missingUsername ?  {content:'Username is required!', pointing: 'above' } : null}
              />
              <Form.Input
                label='Password'
                type='password'
                onChange={e => {
                  setFormData({ ...formData, password: e.target.value })
                  setErrorState({...errorState, missingPassword: false})
                 }
                }
                error={errorState.missingPassword ?  {content:'Password is required!', pointing: 'above' } : null}
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
