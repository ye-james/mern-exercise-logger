import React, { useState } from 'react';
import { Segment, Header, Divider, Input, Form, Accordion, Button} from 'semantic-ui-react'
import Sets from './Sets'
import SearchExercises from '../log/SearchExercises';
import { RoutineContext } from './Routine';


const Exercises = ({exercises, dayIdx}) => {

    const [addStatus, setAddStatus] = useState(false);
    const [newExercise, setNewExercise] = useState('');
    const {routine, setRoutine } = React.useContext(RoutineContext);


  const panels = exercises.map((exercise,idx) => (
      { key:`exercise-${idx}`,
        title: exercise.length === 0 ? 'No Exercises' : exercise.name,
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
          exerciseName: newExercise,
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
        {exercises.length === 0 ? <Header as='h3'>There are no exercises for this day! Start adding below!</Header> :<Accordion panels={panels} exclusive={false} styled/> }
        <Divider/>
        {addStatus && adddExerciseForm}
        <Button className={addStatus ? 'primary' : ''} disabled={addStatus && newExercise === ''} onClick={handleExerciseAdd}>{addStatus ? 'Add' : 'Add Exercise'}</Button>
        {addStatus && <Button onClick={() => {
          setAddStatus(false)
          setNewExercise('')
          }
          }>Cancel</Button>}
        </>
    )
}

export default Exercises;