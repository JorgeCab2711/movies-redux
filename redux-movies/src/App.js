import React from 'react';
import MovieDetalis from './Components/MovieDetalis';
import MovieList from './Components/MovieList';

function App() {
  return (
    <div className="App">
      <h1>Redux movies</h1>
      <div className="container">
        <MovieList />
        <MovieDetalis />
      </div>
    </div>
  );
}

export default App;
