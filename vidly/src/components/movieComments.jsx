import React, { Component } from 'react';
import { saveComment, getComments } from '../services/movieService';
import Form from '../commons/form';
import Joi from 'joi-browser';

class MovieComponent extends Form {
  state = {
    data: {
      comment: ''
    },
    comments: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    comment: Joi.string()
      .required()
      .label('Comment')
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    getComments(movieId).then(res => {
      this.setState({
        comments: res.data
      });
    });

    this.setState({
      data: {
        _id: movieId,
        comment: ''
      }
    });
  }

  doSubmit = () => {
    saveComment(this.state.data).then(res => {
      this.setState({
        comments: res.data
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Movie Comments</h1>
        <ul>
          {this.state.comments.map(c => (
            <li key={c._id}>{c.description}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('comment', 'Comment')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MovieComponent;
