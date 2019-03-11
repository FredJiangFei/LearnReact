import React from 'react';
import Like from '../commons/like';

const MoviesTable = props => {
  let { movies, onLike, onDelete } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map(m => (
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like liked={m.liked} onLike={() => onLike(m)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(m)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
