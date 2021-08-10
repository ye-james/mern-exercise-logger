import React from 'react'
import { Segment, Button, Header, Icon, Container, Item, Image} from 'semantic-ui-react';
import homeImg from '../../imgs/pexels-victor-freitas-2261482.jpg';


const segmentMain = {
    backgroundImage: `url(${homeImg})`,
    backgroundSize: 'cover',
    height: '55vh',
    margin: '0'
}

const headerMain = {
    fontSize: '4em',
    fontWeight: 'normal',
    textShadow: '0.1em 0.1em #000000',
    opacity:'0.8',
    marginBottom: 0,
    marginTop:'3em',
  }

const headerSecondary = {
    fontSize: '1.7em',
    fontWeight: 'normal',
    textShadow: '0.1em 0.1em #000000',
    opacity:'0.8',
    marginTop: '1.5em',
    marginBottom: '1em'
}

const contentContainer = {
    margin: '4em 0 4em 0'
}


const Home = () => {
    return (
        <>
        <Segment basic style={segmentMain}>
            <Container text>
                <Header
                as='h1'
                style={headerMain}
                inverted
                content='What are you waiting for?'                       
                />
                <Header
                as='h2'
                style={headerSecondary}
                inverted
                content='Do whatever you want when you want to.'
                />
                <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
                </Button>
            </Container>
        </Segment>
        <Container style={contentContainer}>
            <Item.Group divided>
                <Item>
                <Item.Image src='/images/wireframe/image.png' />
                <Item.Content>
                    <Item.Header as='a'>Content Header</Item.Header>
                    <Item.Meta>
                    <span>Date</span>
                    <span>Category</span>
                    </Item.Meta>
                    <Item.Description>
                    A description which may flow for several lines and give context to the content.
                    </Item.Description>
                    <Item.Extra>
                    <Image avatar circular src='/images/wireframe/square-image.png' />
                    Username
                    </Item.Extra>
                </Item.Content>
                </Item>
                <Item>
                <Item.Image src='/images/wireframe/image.png' />
                <Item.Content>
                    <Item.Header as='a'>Content Header</Item.Header>
                    <Item.Meta>
                    <span>Date</span>
                    <span>Category</span>
                    </Item.Meta>
                    <Item.Description>
                    A description which may flow for several lines and give context to the content.
                    </Item.Description>
                    <Item.Extra>
                    <Image avatar circular src='/images/wireframe/square-image.png' />
                    Username
                    </Item.Extra>
                </Item.Content>
                </Item>
                <Item>
                <Item.Image src='/images/wireframe/image.png' />
                <Item.Content>
                    <Item.Header as='a'>Content Header</Item.Header>
                    <Item.Meta>
                    <span>Date</span>
                    <span>Category</span>
                    </Item.Meta>
                    <Item.Description>
                    A description which may flow for several lines and give context to the content.
                    </Item.Description>
                    <Item.Extra>
                    <Image avatar circular src='/images/wireframe/square-image.png' />
                    Username
                    </Item.Extra>
                </Item.Content>
                </Item>                
            </Item.Group>
        </Container>
        </>
    )
}

export default Home
