import React, { Component } from 'react';
import { getMovies, deleteMovie } from './../services/movieService';
import Pagination from '../commons/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from '../commons/listGroup';
import { getGenres } from '../services/genreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox';

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: '',
    genres: [],
    sortColumn: { path: 'title', order: 'asc' }
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: '', name: 'All Genres' }, ...data];

    const { data: movies } = await getMovies();
    this.setState({
      movies,
      genres
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

  handleDelete = async movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });

    await deleteMovie(movie._id);
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({
      sortColumn
    });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    let {
      currentPage,
      pageSize,
      movies: allMovies,
      sortColumn,
      searchQuery
    } = this.state;

    if (allMovies.length === 0) return <p>No movies</p>;

    const { totalCount, data: movies } = this.getPagedData();

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
            <Link
              to="/movies/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
            <p>Showing {totalCount} movies.</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />

            <Pagination
              currentPage={currentPage}
              pageSize={pageSize}
              itemsCount={totalCount}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
