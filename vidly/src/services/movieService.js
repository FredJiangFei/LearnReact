import http from './httpService';

export function getMovies() {
  return http.get(`movies`);
}

export function getMovie(movieId) {
  return http.get(`movies/${movieId}`);
}

export function deleteMovie(movieId) {
  return http.delete(`movies/${movieId}`);
}
