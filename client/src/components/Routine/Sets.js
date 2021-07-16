import React from 'react';
import { Form, Button, Fragment } from 'semantic-ui-react';
import { RoutineContext } from './Routine';

const Sets = ({sets,dayIdx, exerciseIdx }) => {

    const { routine, setRoutine }= React.useContext(RoutineContext);
  
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
              <React.Fragment key={`day-${dayIdx}-exercise-${exerciseIdx}-set-${index}`}>
                <Form.Group key={index} widths={2} inline>
                  <Form.Input fluid label='Reps' id={`day-${dayIdx}-exercise-${exerciseIdx}-set-${index}-rep`} name='reps' width={4} value={row.reps}  onChange={e => onRepChange(e.target.value,index)}/>  
                  <Form.Input fluid label='Weight'  id={`day-${dayIdx}-exercise-${exerciseIdx}-set-${index}-weight`} name='weight' width={4} value={row.weight} onChange={e => onWeightChange(e.target.value,index)}/>
                  <Button inverted color='red' type="submit" onClick={() => removeRow(index)}>-</Button>
              </Form.Group> 
            </React.Fragment>
          );
          })}
            <Button onClick={addRow}>Add Set</Button>
        </Form>
  }

  export default Sets;