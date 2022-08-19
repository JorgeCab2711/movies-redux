import { combineReducers } from 'redux';

//All the data that is stored inside the Store reducer
const moviesReducer = () => {
  return [
    { title: 'SpiderMan 2', releaseDate: '05-07-2017', rating: 7.4 },
    { title: 'Infinite war', releaseDate: '27-11-2018', rating: 8.0 },
    { title: 'SpiderMan 3', releaseDate: '21-01-2007', rating: 1.4 },
    { title: 'SpiderMan 4', releaseDate: '15-02-2005', rating: 9.4 },
  ];
};

// User's choice of selected movie action handler
const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
