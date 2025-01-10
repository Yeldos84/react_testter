import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8081/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
},
});

export const fetchTests = async (testId) => {
  const response = await api.get(`tests/`);
  return response.data;
};


export const fetchTest = async (testId) => {
  const response = await api.get(`tests/${testId}`);
  return response.data;
};

export const fetchQuestions = async (testId) => {
  const response = await api.get(`questions/`, {
      params: { test: testId },
  });
  return response.data;
};

export const fetchAnswers = async (questionId) => {
  const response = await api.get(`answers/`, {
      params: { question: questionId },
  });
  return response.data;
};


export const fetchUsers = async () => {
  const response = await api.get(`users/`, {
  });
  return response.data;
};



