import axios from 'axios';
import config from '../config.json';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log('An unexpected error occurrred.');
  }

  return Promise.reject(error);
});

export default {
  get: url => axios.get(`${config.apiEndpoint}/${url}`),
  post: url => axios.post(`${config.apiEndpoint}/${url}`),
  put: url => axios.put(`${config.apiEndpoint}/${url}`),
  delete: url => axios.delete(`${config.apiEndpoint}/${url}`)
};
