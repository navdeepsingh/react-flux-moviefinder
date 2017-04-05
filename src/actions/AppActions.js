import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  searchMovies: (movie) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    })
  },
  receiveMovieResults: (movies) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
      movies: movies
    });
  }

}

module.exports = AppActions;
