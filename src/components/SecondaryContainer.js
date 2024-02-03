import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  console.log(movies);

  if (!movies) return;

  return (
    <div className=" bg-black">
      <div className="-mt-64 relative z-20">
        <MovieList title={'Now Playing'} movies={movies} />
        <MovieList title={'Trending'} movies={movies} />
        <MovieList title={'Popular'} movies={movies} />
        <MovieList title={'Comedy'} movies={movies} />
        <MovieList title={'Horror'} movies={movies} />
        <MovieList title={'Romance'} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
