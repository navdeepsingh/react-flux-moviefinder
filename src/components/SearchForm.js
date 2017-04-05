import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

class SearchForm extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="search-form">
          <h1 className="text-center">Search for a movie</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title.." />
            </div>
            <button className="btn btn-primary btn-block">Search Movie</button>
          </form>
        </div>
      )
  }

  onSubmit(e) {
    e.preventDefault();

    const movie = {
      title : this.refs.title.value.trim()
    }

    AppActions.searchMovies(movie);
  }
}

module.exports = SearchForm;
