import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import Like from '../commons/like';
import Pagination from '../commons/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4
  };

  handleLike = m => {
    const movies = [...movies];
    const idx = movies.indexOf(m);
    movies[idx] = { ...movies[idx] };
    movies[idx].liked = !movies[idx].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    let { currentPage, pageSize, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <h2>Movive Components</h2>
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
                  <Like liked={m.liked} likeToggle={() => this.handleLike(m)} />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(m)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          itemsCount={allMovies.length}
          onPageChange={page => this.handlePageChange(page)}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
