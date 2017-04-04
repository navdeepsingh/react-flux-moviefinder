import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import SearchForm from './SearchForm';

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <SearchForm />
        </div>
      )
  }
}

module.exports = App;
