import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import Movie from './Movie';

class MovieResults extends Component{


  render() {
    return(
        <div>
          <h3 className="text-center"></h3>
          {
            this.props.movies.map(function(movie, i){
              return (
                <Movie movie={movie} key={i} />
              )
            })
          }
        </div>
      )
  }
}

module.exports = MovieResults;
