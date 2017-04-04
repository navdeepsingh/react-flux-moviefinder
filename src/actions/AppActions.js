import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  searchMovies: (movie) => {
    console.log('Searching for movie ' + movie.title)
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    })
  }

}

module.exports = AppActions;
