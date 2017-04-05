import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

class Movie extends Component{

  render() {
    const movieObject = this.props.movie;
    const link = `http://www.imdb.com/title/${movieObject.imdbID}`;
    return(
        <div className="well">
          <div className="row">
            <div className="col-md-4">
              <img className="thumbnail" src={movieObject.Poster} />
            </div>
            <div className="col-md-8">
              <h4>{movieObject.Title}</h4>
              <ul className="list-group">
                <li className="list-group-item">Year Released: {movieObject.Year}</li>
                <li className="list-group-item">IMDB ID: {movieObject.imdbID}</li>
              </ul>
              <a href={link} target="_blank" className="btn btn-primary">View on IMDB</a>
            </div>
          </div>
        </div>
      )
  }
}

module.exports = Movie;
