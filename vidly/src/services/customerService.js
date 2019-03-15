import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/customers';

export function getAll() {
  return http.get(apiEndpoint);
}

export function add(name) {
  return http.post(apiEndpoint, {
    name: name
  });
}

export function remove(id) {
  return http.delete(`${apiEndpoint}/${id}`);
}
