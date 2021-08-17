import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Form,
  Button,
  Header,
  Segment,
  Message,
} from 'semantic-ui-react';
import { signupUser } from '../../redux/actions/auth';

const containerStyles = {
  width: '50%',
  height: '80vh',
  paddingTop: '1em',
};

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  });

  const [errorState, setErrorState] = useState({
    missingName: false,
    missingUsername: false,
    missingPassword: false,
  });

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  const handleUserSignup = () => {
    if (
      formData.name === '' &&
      formData.username === '' &&
      formData.password === ''
    ) {
      setErrorState({
        ...errorState,
        missingName: true,
        missingUsername: true,
        missingPassword: true,
      });
    } else if (formData.username === '' && formData.password === '') {
      setErrorState({
        ...errorState,
        missingUsername: true,
        missingPassword: true,
      });
    } else if (formData.password === '') {
      setErrorState({
        ...errorState,
        missingPassword: true,
      });
    } else {
      dispatch(signupUser(formData));
    }
  };

  return (
    <Container style={containerStyles}>
      <Grid textAlign='left' verticalAlign='middle' style={{ height: '60vh' }}>
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as='h2' textAlign='center'>
            Signup
          </Header>
          <Form size='large' onSubmit={handleUserSignup}>
            <Segment>
              <Form.Input
                label='Full Name'
                name='name'
                onChange={e => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrorState({ ...errorState, missingName: false });
                }}
                error={
                  errorState.missingName
                    ? { content: 'Name is required!', pointing: 'above' }
                    : null
                }
              />
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
                name='password'
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
              <Button>Signup</Button>
            </Segment>
          </Form>
          <Message>
            Already a member? <Link to='/login'>Login here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Signup;
