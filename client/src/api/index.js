import axios from 'axios';

const url = 'http://localhost:8000'

export const fetchLog = () => axios.get(url+'/log/all');

export const addExercise = (newExercise) => 
    axios.post(url+'/log/add-exercise' ,{
        name: newExercise.exercise,
        set: newExercise.set,
        reps: newExercise.reps,
        weight: newExercise.weight
    })
    /*.then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });*/

export const deleteExercise = (id) =>
    axios.delete(url+'/log/delete-exercise' , { data: {
        _id: id
    }})
    /*().then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });*/

export const getExercises = () => axios.get(url+'/exercises');
