import axios from 'axios';
import { ModalActions } from 'semantic-ui-react';

const API = axios.create({ baseURL: 'http://localhost:8000' });

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

//Create interceptor to include token with our requests if user is logged in
API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const fetchLog = () =>
  API.get(`/log/${JSON.parse(localStorage.getItem('profile')).userId}`);

export const addExercise = newExercise =>
  API.post('/log/add-exercise', {
    userId: JSON.parse(localStorage.getItem('profile')).id,
    name: newExercise.exercise,
    set: newExercise.set,
    reps: newExercise.reps,
    weight: newExercise.weight,
  });

export const updateExercise = (newExercise, id) =>
  API.post(`/log/update-exercise`, {
    id: id,
    name: newExercise.exercise,
    set: newExercise.set,
    reps: newExercise.reps,
    weight: newExercise.weight,
  });

export const deleteExercise = id =>
  API.delete('/log/delete-exercise', {
    _id: id,
  });

export const saveRoutine = routine => {
  API.post(
    `/routine/${JSON.parse(localStorage.getItem('profile')).userId}`,
    {
      routine,
    },
    config
  );
};

export const fetchCurrentExercise = id => API.get(`/log/edit/${id}`);

export const getExercises = () => API.get('/exercises');

export const signupUser = async formData => {
  const { name, username, password } = formData;
  const body = JSON.stringify({name, username, password});

  const res = API.post('/user/signup', body , config);
  return res;
};

export const loginUser = async formData => {
  const { username, password } = formData;
  const body = JSON.stringify({ username, password });

  const res = await API.post('/user/login', body, config);
  return res;
};
