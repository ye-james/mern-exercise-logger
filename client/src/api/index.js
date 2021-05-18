import axios from 'axios';
import { ModalActions } from 'semantic-ui-react';

const url = 'http://localhost:8000'

export const fetchLog = () => axios.get(url+'/log/all');

export const addExercise = (newExercise) => 
    axios.post(url+'/log/add-exercise' ,{
        name: newExercise.exercise,
        set: newExercise.set,
        reps: newExercise.reps,
        weight: newExercise.weight
    })


export const deleteExercise = (id) =>
    axios.delete(url+'/log/delete-exercise' , { data: {
        _id: id
    }})

export const getExercises = () => axios.get(url+'/exercises');

export const signupUser = (user) => axios.post(url+'/user/signup', {user});

export const loginUser = user => axios.post(url+'/user/login', {user});

