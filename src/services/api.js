import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getQuestions = () => axios.get(`${API_URL}/questions/random`);
export const submitAnswer = (answerId) => axios.post(`${API_URL}/questions/submit`, { answerId });