import axios from 'axios';
import { ModalActions } from 'semantic-ui-react';

const API = axios.create({baseURL: 'http://localhost:8000'});

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};




//Create interceptor to include token with our requests if user is logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchLog = () => API.get(`/log/${JSON.parse(localStorage.getItem('profile')).userId}`);

export const addExercise = (newExercise) => 
    API.post('/log/add-exercise' ,{
        userId: JSON.parse(localStorage.getItem('profile')).id,
        name: newExercise.exercise,
        set: newExercise.set,
        reps: newExercise.reps,
        weight: newExercise.weight
    })

export const updateExercise = (newExercise, id) => 
    API.post(`/log/update-exercise`,{
        id: id,
        name: newExercise.exercise,
        set: newExercise.set,
        reps: newExercise.reps,
        weight: newExercise.weight
    })


export const deleteExercise = (id) =>
    API.delete('/log/delete-exercise' , {
        _id: id
    })


export const fetchCurrentExercise = id => API.get(`/log/edit/${id}`);


export const getExercises = () => API.get('/exercises');

export const signupUser = (user) => API.post('/user/signup', {user}, config);


export const loginUser = user => API.post('/user/login', 
    {
        username: user.username, 
        password: user.password
    },
    config
 );

<<<<<<< Updated upstream
export const loginUser = async (user) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const {username, password } = user;
    const body = JSON.stringify({username, password});

    const res = await API.post('/user/login', body, config);
    return res;
}
=======

>>>>>>> Stashed changes
