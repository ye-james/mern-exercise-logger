import React, { useEffect } from 'react' 
import { useDispatch, useSelector} from 'react-redux';
import { Container, Header, Divider, Grid, Item, Image, Button } from 'semantic-ui-react';
import { getExercises } from '../../redux/actions/exercises'
const containerStyles={
    margin: '4em 0 4em 0'
}



const Explore = () => {
    const dispatch = useDispatch();
    const exercises = useSelector(state => state.exercises.exercises);

    useEffect(() => {
        dispatch(getExercises());
    }, [dispatch])

    return (
        <div>
         <Container className={containerStyles}>
            <Header as='h1'>Explore Exercises</Header>
            <Divider />
            <Grid>
                <Grid.Row width='4'>
                    <Button.Group floated='left'>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </Button.Group>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group>
                            { exercises && exercises.length !== 0 ? exercises.map(exercise => {
                                return ( 
                                    <Item>
                                        <Item.Image size='small' src={exercise.link} />
                                        <Item.Content>
                                        <Item.Header as='a'>{exercise.title}</Item.Header>
                                        <Item.Meta>{exercise.exercise_type}</Item.Meta>
                                        <Item.Description>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </Item.Description>
                                        <Item.Extra>{exercise.major_muscle}</Item.Extra>
                                        </Item.Content>
                                    </Item>
                                    )
                                }) : 'No exercises'
                            }
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </div>
    )
}

export default Explore
