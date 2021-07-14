import React from 'react';
import { Segment, Header, Divider, Input, Form, Accordion} from 'semantic-ui-react'
import SearchExercises from '../SearchExercises';


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

export default Exercises;