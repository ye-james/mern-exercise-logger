import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Input } from 'semantic-ui-react';

const NavBar = () => {

  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }

    return (
      <Segment basic inverted style={{marginBottom: '0'}}>
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
            to='explore'          
            name='explore'
            active={activeItem === 'explore'}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='log'
            name='log'
            active={activeItem === 'log'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='progress'
            as={Link}
            to='progress'
            active={activeItem === 'Progress'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              as={Link}
              to='/user/login'
            />
          </Menu.Menu>          
        </Menu>
      </Segment>
    )
}

export default NavBar;

