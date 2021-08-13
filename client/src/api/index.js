import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

//Create interceptor to include token with our requests if user is logged in
API.interceptors.request.use(req => {
  const token = localStorage.getItem('token');

  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export const fetchLog = (userId) =>
  API.get(`/log/${userId}`);

export const addExercise = (newExercise, userId) =>
  API.post('/log/add-exercise', {
    userId,
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

export const saveRoutine = (routine, userId) => {
  API.post(
    `/routine/${userId}`,
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
  const body = JSON.stringify({ name, username, password });

  const res = API.post('/auth/signup', body, config);
  return res;
};

export const loginUser = async formData => {
  const { username, password } = formData;
  const body = JSON.stringify({ username, password });

  const res = await API.post('/auth/login', body, config);
  return res;
};

export const getUserInfo = async () => await API.get('/auth');
