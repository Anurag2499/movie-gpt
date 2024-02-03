import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies);
  console.log(movies[0]);
  return (
    <div className="px-6 ">
      <h1 className="font-bold text-3xl py-4 text-white">{title}</h1>
      <div className="flex  overflow-x-scroll scrollbar-hide whitespace-nowrap">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
