import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  // console.log(movies?.nowPlayingMovies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-64 relative z-20">
          <MovieList
            title={'Now Playing'}
            moviesList={movies?.nowPlayingMovies}
          />
          <MovieList title={'Top Rated'} moviesList={movies?.topRatedMovies} />
          <MovieList
            title={'Upcoming Movies'}
            moviesList={movies?.upcomingMovies}
          />
          <MovieList title={'Popular'} moviesList={movies?.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
