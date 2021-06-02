import axios from 'axios';
import { ModalActions } from 'semantic-ui-react';

const API = axios.create({baseURL: 'http://localhost:8000'});

//Create interceptor to include token with our requests
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchLog = () => API.get('/log/all');

export const addExercise = (newExercise) => 
    API.post('/log/add-exercise' ,{
        name: newExercise.exercise,
        set: newExercise.set,
        reps: newExercise.reps,
        weight: newExercise.weight
    })


export const deleteExercise = (id) =>
    API.delete('/log/delete-exercise' , { data: {
        _id: id
    }})

export const getExercises = () => API.get('/exercises');

export const signupUser = (user) => API.post('/user/signup', {user});

export const loginUser = user => API.post('/user/login', {user});

