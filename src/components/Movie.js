import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowInfo } from '../utils/configSlice';
import { setPlay } from '../utils/moviesSlice';

const Movie = ({ movieId }) => {
  const dispatch = useDispatch();
  const isMute = 1;
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  console.log(trailerVideo);
  useMovieTrailer(movieId);

  const backToMain = () => {
    dispatch(setPlay(null));
  };
  return (
    movieId &&
    trailerVideo && (
      <div className="bg-black">
        <div onClick={backToMain} className="cursor-pointer ml-4 p-2">
          🔙
        </div>
        <div className="bg-black">
          <iframe
            className="w-[90%] aspect-video "
            src={`https://www.youtube.com/embed/${
              trailerVideo?.key
            }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${
              isMute && '&mute=1'
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    )
  );
};

export default Movie;
