import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux'
import { Accordion, Form, Grid, Header, Button, Divider, Segment, Input } from 'semantic-ui-react';
import { getExercises } from '../redux/actions/exercises';
import SearchExercises from './SearchExercises';
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

const RoutineContext = React.createContext();

const Routine2 = ({days = 7, name ='Sample Routine 1'}) => {

  const INTITAL_ROUTINE = createInititalRoutine(days,name)
  const [routine, setRoutine] = useState(INTITAL_ROUTINE)
  const  dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercises())
  },[])

    return (
        <Grid columns={2}>
            <Grid.Row textAlign='center'>
                <Header as='h2'>Start Adding Exercies!</Header>
            </Grid.Row>
            <Grid.Row>
                <Header as='h2'>{routine.name}</Header>
            </Grid.Row>
            <RoutineContext.Provider value={{routine,setRoutine}}>
            <Grid.Row>
              <Days days={routine.days}/>
            </Grid.Row>
            <Grid.Row>
                <Button className='primary'>Save Routine</Button>
            </Grid.Row>
            </RoutineContext.Provider>
        </Grid>
    )
}



const Days = ({days}) => {

  const panels = days.map((day,idx) => ({key:`day-${idx}`,title:day.name,content: {content: <Exercises exercises={day.exercises} dayIdx={idx} exclusive={false}/>}}))

  return <Accordion defaultActiveIndex={0} panels={panels} exclusive={false} styled/>
}

const Exercises = ({exercises, dayIdx}) => {

    const [addStatus, setAddStatus] = useState(false);
    const [newExercise, setNewExercise] = useState('');
    const {routine, setRoutine } = React.useContext(RoutineContext);

    const addExerciseToRoutine = () => {
        const routineCopy = {...routine};

    }

  const panels = exercises.map((exercise,idx) => (
      { key:`exercise-${idx}`,
        title:exercise.name,
        content: {
          content: 
            <Sets sets={exercise.sets} dayIdx={dayIdx} exerciseIdx={idx} exclusive={false}/>
        }
    })
    )
  
  const adddExerciseForm = (
    <Segment basic padded>
      <Header as='h4'>Search existing exercises</Header>
      <SearchExercises setNewExercise={setNewExercise}/>
      <Divider horizontal>or</Divider>
      <Header as='h4'>Add your own exercise</Header>
      <Form>
        <Input focus placeholder='ex: Calf Extensions' value={newExercise} onChange={e => setNewExercise(e.target.value)}></Input>
      </Form>
    </Segment>
    );

  

  const handleExerciseAdd = () => {
      if(!addStatus) {
        setAddStatus(true);
      } else if(addStatus) {
        const newExerciseObj = {
          name: newExercise,
          sets: []
        }
        const routineCopy = {...routine}
        routineCopy.days[dayIdx].exercises.push(newExerciseObj);
        setRoutine(routineCopy);
        setAddStatus(false);
      }
  }

  return (
      <>
        <Accordion defaultActiveIndex={0} panels={panels} exclusive={false} styled/>
        <Divider/>
        {addStatus && adddExerciseForm}
        <Button className={addStatus ? 'primary' : ''} disabled={addStatus && newExercise === ''} onClick={handleExerciseAdd}>{addStatus ? 'Save' : 'Add Exercise'}</Button>
        {addStatus && <Button onClick={() => {
          setAddStatus(false)
          setNewExercise('')
          }
          }>Cancel</Button>}
        </>
    )
}

const Sets = ({sets,dayIdx, exerciseIdx }) => {

  const {routine, setRoutine}= React.useContext(RoutineContext);

  const _getCurrExercise = (routine) => {
    const days = routine.days
    const currDay = days[dayIdx]
    const currExercise = currDay.exercises[exerciseIdx]
    return currExercise

  }

  const onSubmit = () => {

  }

  const addRow = () => {
    const routineCopy = {...routine}
    const currExercise = _getCurrExercise(routineCopy)
    currExercise.sets.push({reps:0, weight:0})
    setRoutine(routineCopy)
  }
  const removeRow = (idx) => {
    const routineCopy = {...routine}
    const currExercise = _getCurrExercise(routineCopy)
    const sets = currExercise.sets
    sets.splice(idx,1)
    setRoutine(routineCopy)
  }

  const onRepChange = (value,idx) => {
    const routineCopy = {...routine}
    const currExercise = _getCurrExercise(routineCopy)
    const sets = currExercise.sets
    const currSet = sets[idx]
    currSet.reps = value
    setRoutine(routineCopy)
  }

  const onWeightChange = (value,idx) => {
    const routineCopy = {...routine}
    const currExercise = _getCurrExercise(routineCopy)
    const sets = currExercise.sets
    const currSet = sets[idx]
    currSet.weight = value
    setRoutine(routineCopy)
  }

      return <Form onSubmit={onSubmit}>
        {sets.map((row,index) => {
          return (
            <Fragment key={`day-${dayIdx}-exercise-${exerciseIdx}-set-${index}`}>
              <Form.Group key={index} widths={2} inline>
                <Form.Input fluid label='Reps' id={`day-${dayIdx}-exercise-${exerciseIdx}-set-${index}-rep`} name='reps' width={4} value={row.reps}  onChange={e => onRepChange(e.target.value,index)}/>  
                <Form.Input fluid label='Weight'  id={`day-${dayIdx}-exercise-${exerciseIdx}-set-${index}-weight`} name='weight' width={4} value={row.weight} onChange={e => onWeightChange(e.target.value,index)}/>
                <Button inverted color='red' type="submit" onClick={() => removeRow(index)}>-</Button>
            </Form.Group> 
          </Fragment>
        );
        })}
          <Button onClick={addRow}>Add Set</Button>
      </Form>
}

export default Routine2;