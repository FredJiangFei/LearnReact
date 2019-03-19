import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/customers';
const tokenKey = 'token';

export function getAll() {
  return http.get(apiEndpoint);
}

export function add(name) {
  return http.post(apiEndpoint, {
    name: name
  });
}

export function remove(id) {
  http.setJwt(getJwt());
  return http.delete(`${apiEndpoint}/${id}`);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function register() {
  return http.post(`${apiUrl}/users`, {
    name: 'fred',
    email: '329126523@qq.com',
    password: '123123',
    isAdmin: true
  });
}

export function login() {
  return http.post(`${apiUrl}/auths`, {
    email: '329126523@qq.com'
  });
}
