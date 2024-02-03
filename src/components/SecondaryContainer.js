import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log(movies?.nowPlayingMovies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-64 relative z-20">
          <MovieList
            title={'Now Playing'}
            moviesList={movies?.nowPlayingMovies}
          />
          <MovieList title={'Trending'} moviesList={movies?.nowPlayingMovies} />
          <MovieList title={'Popular'} moviesList={movies?.popularMovies} />
          <MovieList title={'Horror'} moviesList={movies?.nowPlayingMovies} />
          <MovieList title={'Romance'} moviesList={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
