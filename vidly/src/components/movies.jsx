import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';
import Pagination from '../commons/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from '../commons/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: []
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres
    });
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const idx = movies.indexOf(movie);
    movies[idx] = { ...this.state.movies[idx] };
    movies[idx].liked = !movies[idx].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  handleGenreSelect = genre => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1
    });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    let {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre
    } = this.state;

    if (allMovies.length === 0) return <p>No movies</p>;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(x => x.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <h2>Movive Components</h2>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <ListGroup
              genres={this.state.genres}
              selectedGenre={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p>Showing {filteredMovies.length} movies.</p>
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />

            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              itemsCount={filteredMovies.length}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
