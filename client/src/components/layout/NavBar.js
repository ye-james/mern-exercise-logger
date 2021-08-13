import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Segment, Input, Button } from 'semantic-ui-react';
import { logoutUser } from '../../redux/actions/auth';

const NavBar = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState('home');
  const loggedIn = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const history = useHistory();

  const handleItemClick = ({ name }) => {
    setActiveItem(name);
  };

  const handleLogout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <Segment basic inverted style={{ marginBottom: '0' }}>
      <Menu inverted pointing secondary>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/explore'
          name='explore'
          active={activeItem === 'explore'}
          onClick={handleItemClick}
        />
        {user ? (
          <Menu.Item
            as={Link}
            to={`/log/${user._id}`}
            name='log'
            active={activeItem === 'log'}
            onClick={handleItemClick}
          />
        ) : null}
        {user ? (
          <Menu.Item
            as={Link}
            to={`/routine`}
            name='routine'
            active={activeItem === 'routine'}
            onClick={handleItemClick}
          />
        ) : null}
        {user ? (
          <Menu.Item
            name='progress'
            as={Link}
            to='/progress'
            active={activeItem === 'Progress'}
            onClick={handleItemClick}
          />
        ) : null}

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {loggedIn && user ? (
            <Menu.Item name={`Welcome ${user.name.split(' ')[0]}`} />
          ) : (
            <Menu.Item name='sign up' as={Link} to='/signup' />
          )}
          {loggedIn ? (
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              as={Button}
              onClick={handleLogout}
            />
          ) : (
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              as={Link}
              to='/login'
            />
          )}
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default NavBar;
