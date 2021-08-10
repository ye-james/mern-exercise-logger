import React, {useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux'
import { Grid, Header, Button } from 'semantic-ui-react';
import { getExercises, addRoutine } from '../../redux/actions/exercises';
import { RoutineContext } from './Routine';
import Days from './Days'
/** Dynamically create intital routine based on number of days and routine name
 * 
 * @param {*} days 
 * @param {*} name 
 * @returns 
 */
const createInititalRoutine = (days,name) => {

  //for now we just return a dummy routine
return {
  name,
  days: [
    {
      name:'Day 1: Chest Day',
      exercises:[
        {
          name: 'Bench Press',
          sets: [
            {
                reps: 1,
                weight:100,
            },
            {
                reps: 1,
                weight:100,
            }
          ]
        },
        {
          name: 'Incline Bench Press',
          sets: [
            {
                reps: 1,
                weight:100,
            }
          ]
        }
      ]
    },
    {
      name:'Day 2: Leg Day',
      exercises:[
        {
          name: 'Squat',
          sets: [
            {
                reps: 1,
                weight:100,
            },
            {
                reps: 1,
                weight:100,
            }
          ]
        },
        {
          name: 'DeadLift ',
          sets: [
            {
                reps: 1,
                weight:100,
            }
          ]
        }
      ]
    },
    {
      name:'Day 3: Leg Day',
      exercises:[
        {
          name: 'Squat',
          sets: [
            {
                reps: 1,
                weight:100,
            },
            {
                reps: 1,
                weight:100,
            }
          ]
        },
        {
          name: 'DeadLift ',
          sets: [
            {
                reps: 1,
                weight:100,
            }
          ]
        }
      ]
    }
  ]
}
}

//const RoutineContext = React.createContext();

const Routine2 = () => {

  // const INTITAL_ROUTINE = createInititalRoutine(days,name)
  // const [routine, setRoutine] = useState(INTITAL_ROUTINE)
  const { routine, setRoutine} = useContext(RoutineContext)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercises())
  },[])

    const saveRoutine = () => {
      dispatch(addRoutine(routine))
    }

    return (
        <Grid columns={2}>
            <Grid.Row textAlign='center'>
                <Header as='h2'>Start Adding Exercies!</Header>
            </Grid.Row>
            <Grid.Row>
                <Header as='h2'>{routine.name}</Header>
            </Grid.Row>
            <Grid.Row>
              <Days days={routine.days}/>
            </Grid.Row>
            <Grid.Row>
                <Button className='primary' onClick={saveRoutine}>Save Routine</Button>
            </Grid.Row>
        </Grid>
    )
}


export default Routine2;