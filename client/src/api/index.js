import axios from 'axios';

const url = 'http://localhost:8000/log'

export const fetchLog = () => axios.get(url+'/all');

export const addExercise = (newExercise) => {
    axios.post(url+'/add-exercise' ,{
        name: newExercise.exercise,
        set: newExercise.set,
        reps: newExercise.reps,
        weight: newExercise.weight
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
};

export const deleteExercise = (id) => {
    axios.delete(url+'/delete-exercise' , { data: {
        _id: id
    }}).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });

}
