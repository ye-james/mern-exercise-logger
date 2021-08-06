import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Form, Button, Header } from 'semantic-ui-react';
import { signupUser } from '../redux/actions/user';

const containerStyles = {
  width: '20%',
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

  const handleUserSignup = () => {
    dispatch(signupUser(formData));
  };

  return (
    <Container style={containerStyles}>
      <Grid>
        <Grid.Row>
          <Header as='h1'>Sign up to log your progress</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column centered columns={16}>
            <Form onSubmit={handleUserSignup}>
              <Form.Input
                label='Full Name'
                name='name'
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Form.Input
                label='Username'
                name='username'
                onChange={e =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <Form.Input
                label='Password'
                name='password'
                type='password'
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span>Already a member? </span>
              <a href='/user/login'>Login here</a>
              <Form.Input type='submit' control={Button} content='Sign Up' />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Signup;
