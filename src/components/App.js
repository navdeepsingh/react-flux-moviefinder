import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import SearchForm from './SearchForm';
import MovieResults from './MovieResults';

const getAppState = () => {
  return {
    movies: AppStore.getMovieResults()
  }
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState);
  }

  render() {
    console.log(this.state.movies);

    return(
        <div>
          <SearchForm />
          {
            this.state.movies.length > 0 ?
            <MovieResults movies={this.state.movies} /> :
            null
          }
        </div>
      )
  }
}

module.exports = App;
