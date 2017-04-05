import AppActions from '../actions/AppActions';

module.exports = {
  searchMovies: (movie) => {
    let searchPromise = fetch(`http://www.omdbapi.com/?s=${movie.title}`, {
                            'Accept': '*/*',
                            'Content-Type': 'text/plain',
                          });

    Promise
      .all([searchPromise])
      .then(responses => {
        return Promise.all(responses.map(res => res.json()))
      })
      .then(res => {
        AppActions.receiveMovieResults(res[0].Search);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
