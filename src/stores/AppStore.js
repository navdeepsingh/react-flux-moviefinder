import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppAPI from '../utils/appAPI';

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = [];

const AppStore = assign({}, EventEmitter.prototype, {
  setMovieResults: function(movies){
    _movies = movies;
  },
  getMovieResults: function(){
    return _movies;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.remove('change', callback);
  }
});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_MOVIES:
      console.log('Searching for movie ' + action.movie.title);
      AppAPI.searchMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_MOVIE_RESULTS:
      AppStore.setMovieResults(action.movies);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});


module.exports = AppStore;
