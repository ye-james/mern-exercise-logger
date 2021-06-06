import React, { useState, useEffect } from 'react'
import { useRouteMatch, useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Header, Button, Form } from 'semantic-ui-react';
import { addExercise, fetchCurrentExercise, updateExercise } from '../redux/actions/log';

//Use State
//If in editing mode then populate form filtering state by ID
const ExerciseForm = ({open, handleModal}) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    let { url } = useRouteMatch();
    const id = useParams().exerciseId
    const [modalOpen, setModalOpen] = useState(url==='/log/add' || url===`/log/edit/${id}`);


    const currExercise = useSelector(state => state.logs.editExercise);
    const [exercise, setExercise] = useState('');
    const [set, setSet] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');


    useEffect(() => {
        dispatch(fetchCurrentExercise(id))
    }, [])

    useEffect(() => {
        if(currExercise) {
            setExercise(currExercise.name);
            setSet(currExercise.set);
            setReps(currExercise.reps);
            setWeight(currExercise.weight);
        }
    }, [currExercise])

    const handleFormSubmit = () => {
        const newExercise = {
            exercise,
            set,
            reps,
            weight
        }
        if(id) {
            dispatch(updateExercise(newExercise, id));
        } else {
            dispatch(addExercise(newExercise))

        }
        history.push('/log')
    }

    const closeModal = () => {
        setModalOpen(false);
        history.goBack();
    }

    return (
        <div>
            <Modal open={modalOpen} closeIcon onClose={closeModal}>
                <Modal.Header>{id ? 'Edit Exercise' : 'Add an Exercise'}</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Field>
                            <label>Exercise Name</label>
                            <input 
                                name="exercise" 
                                placeholder="Ex: Bench Press"
                                value={exercise}
                                onChange={(e) => {setExercise(e.target.value)}}
                                />
                        </Form.Field>
                        <Form.Field>
                            <label>Set</label>
                            <input 
                                name="set" 
                                placeholder="1"
                                value={set}
                                onChange={(e) => {setSet(e.target.value)}}
                                />
                        </Form.Field>
                        <Form.Field>
                            <label># of reps</label>
                            <input 
                                name="reps" 
                                placeholder="10"
                                value={reps}
                                onChange={(e) => {setReps(e.target.value)}}
                                />
                        </Form.Field>
                        <Form.Field>
                            <label>Amount of weight</label>
                            <input 
                                name="weight" 
                                placeholder="35 lbs"
                                value={weight}
                                onChange={(e) => {setWeight(e.target.value)}}
                                />
                        </Form.Field>
                        <Button basic color="blue" type='submit' value="Submit">{ id ? 'Save' : 'Add'}</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ExerciseForm
