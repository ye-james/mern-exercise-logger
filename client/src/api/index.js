import axios from 'axios';

const url = 'http://localhost:8000/log'

export const fetchLog = () => axios.get(url);
export const addExercise = (newExercise) => {
    axios.post(url+'/add-exercise' ,{
        name: newExercise.exercise,
        set: newExercise.set,
        reps: newExercise.reps,
        weight: newExercise.weight
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
};