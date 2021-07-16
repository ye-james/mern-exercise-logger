import React, { useState, createContext } from 'react'
import { Grid, Segment, Divider, Header, Button, Form, Input} from 'semantic-ui-react'
import Routine2 from './Routine2';

export const RoutineContext = createContext();

const Routine = () => {

    const [selectedDays, setSelectedDays] = useState(0);
    const [showNext, setShowNext] = useState({
        showWelcome: true,
        showName: false,
        showDays: false,
        showNameInput: false,
        showRoutine: false
    });
    const [routine, setRoutine] = useState({
        name: '',
        days: []
    });

    const setRoutineName = (e) => {
        const routineCopy = {...routine};
        routineCopy.name = e.target.value;
        setShowNext({
            ...showNext, 
            showName: false, 
            showDays: true
        })
    }

    const setDays = () => {
        console.log(selectedDays);
        const routineCopy = {...routine}
        let newDaysArr = []
        for(let i = 0; i < selectedDays; i++) {
            let newDayObj = {
                exercises: [],
                name: ''
            }
            newDaysArr.push(newDayObj);
        }
        routineCopy.days = newDaysArr;
        setRoutine(routineCopy); 
        setShowNext({
            ...showNext,
            showDays: false,
            showNameInput: true
        })       
    }

    const handleDayChange = (e, idx) => {
        const namesArr = [...routine.days];
        namesArr[idx].name = e.target.value;
        setRoutine({...routine, days: namesArr})

        console.log(routine)
    }

    return (
        <div>
           {showNext.showWelcome && (
           <>
           <Header as='h2' textAlign='center'>Let's Get Started</Header>
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                        <Header onClick={() => setShowNext({...showNext,showWelcome: false, showName: true})}>
                            Create a new routine
                        </Header>
                        </Grid.Column>
                        <Grid.Column>
                        <Header>
                            Choose from existing template
                        </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>
        </>
        )}
        { showNext.showName && <Segment padded >
            <Grid centered>
                <Header as='h3'>Name Your Routine!</Header>
                <Grid.Row>
                <Form>
                    <Input 
                        label='Routine Name:' 
                        placeholder='ex: My Routine' 
                        value={routine.name} 
                        onChange={e => setRoutine({...routine, name:e.target.value})}
                    />
                </Form>
                </Grid.Row>
                <Grid.Row>
                    <Button 
                        primary 
                        disabled={routine.name===''} 
                        onClick={setRoutineName}
                    >Next</Button>
                    <Button 
                        color='red'
                        onClick={() => setShowNext({...showNext, showName: false, showWelcome: true})}
                    >Back</Button>
                </Grid.Row>
            </Grid>
        </Segment>}
        {showNext.showDays && <Segment padded>
            <Grid centered>
                <Grid.Row>
                    <Header as='h3'>How many days will be in this routine?</Header>
                </Grid.Row>
                <Grid.Row>
                    <Button.Group>
                        <Button value={1} onClick={e => setSelectedDays(e.target.value)}>1</Button>
                        <Button value={2} onClick={e => setSelectedDays(e.target.value)}>2</Button>
                        <Button value={3} onClick={e => setSelectedDays(e.target.value)}>3</Button>
                        <Button value={4} onClick={e => setSelectedDays(e.target.value)}>4</Button>
                        <Button value={5} onClick={e => setSelectedDays(e.target.value)}>5</Button>
                        <Button value={6} onClick={e => setSelectedDays(e.target.value)}>6</Button>
                        <Button value={7} onClick={e => setSelectedDays(e.target.value)}>7</Button>
                    </Button.Group>
                </Grid.Row>
                <Grid.Row>
                    <Button 
                        primary
                        disabled={selectedDays===0}
                        onClick={() => setDays()}
                    >Next</Button>
                    <Button 
                        color='red'
                        onClick={() => setShowNext({...showNext, showDays: false, showName: true})}
                    >Back</Button>
                </Grid.Row>
            </Grid>
        </Segment>}
        {showNext.showNameInput && <Segment padded>
            <Grid centered>
                <Grid.Row>
                    <Header as='h3'>Name each day!</Header>
                </Grid.Row>
                <Grid.Row>
                <Form>
                    {routine.days.map((day,idx) => {
                        return(
                            <div key={idx}>
                                <Input 
                                    label={`Day ${idx+1}`} 
                                    placeholder='ex: Chest Day' 
                                    value={routine.days[idx].name}
                                    onChange={e => handleDayChange(e, idx)}
                                />
                            </div>
                        )
                    })}
                </Form>
                </Grid.Row>
                <Grid.Row>
                    <Button 
                        primary
                        onClick={() => setShowNext({...showNext, showNameInput: false, showRoutine: true})}
                    >Next</Button>
                </Grid.Row>
                <Grid.Row>
                    {/* <Button primary>Next</Button> */}
                </Grid.Row>
            </Grid>
        </Segment>}
        {showNext.showRoutine && <RoutineContext.Provider value={{routine, setRoutine}}>
            <Routine2/>
        </RoutineContext.Provider>}
      </div>
    )
}

export default Routine

