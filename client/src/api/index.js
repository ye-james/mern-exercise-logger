import axios from 'axios';

const url = 'http://localhost:8000/log'

export const fetchLog = () => axios.get(url);