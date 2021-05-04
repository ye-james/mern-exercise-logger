import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Modal, Header, Button, Form } from 'semantic-ui-react';
import { addExercise, getLog } from '../redux/actions/log';

const ExerciseForm = ({open, handleModal}) => {

    const dispatch = useDispatch();
    const [exercise, setExercise] = useState('');
    const [set, setSet] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');


    const handleFormSubmit = (e) => {

        const newExercise = {
            exercise,
            set,
            reps,
            weight
        }
        const res = dispatch(addExercise(newExercise))
        console.log(res);
    }

    return (
        <div>
            <Modal open={open} closeIcon onClose={handleModal}>
                <Modal.Header>Add an Exercise</Modal.Header>
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
                        <Button basic color="blue" type='submit' value="Submit">Add</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ExerciseForm
