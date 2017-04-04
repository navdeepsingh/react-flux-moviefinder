import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppAPI from '../utils/appAPI';

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = [];

const AppStore = assign({}, EventEmitter.prototype, {
  emitChange: () => {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: (callback) => {
    this.on('change', callback);
  },
  removeChangeListener: (callback) => {
    this.remove('change', callback);
  }
});

AppDispatcher.registered((payload) => {
  const action = payload.action;

  switch(action.actionType) {

  }

  return true;
});


module.exports = AppStore;
