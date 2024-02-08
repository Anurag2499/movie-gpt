import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useDispatch, useSelector } from 'react-redux';
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
      <div className="absolute top-0 left-0 w-screen h-screen p-4 bg-black">
        <div className="absolute top-0 z-[500] w-screen h-[80px] bg-black"></div>
        <div className="absolute bottom-0 z-[500] w-screen h-[80px] bg-black"></div>
        <div
          onClick={backToMain}
          className="z-[900] absolute flex items-center justify-center px-2 text-center text-white bg-black border border-black rounded-full cursor-pointer font-6xl hover:opacity-50 left-8 top-8"
        >
          🔙
        </div>
        <iframe
          title="netflix video"
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${
            trailerVideo?.key
          }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${
            isMute && '&mute=1'
          }`}
        ></iframe>
      </div>
      // <div className="absolute bg-black">
      //   <div className="absolute top-0 z-[500] w-screen h-[80px] bg-black"></div>
      //   <div className="absolute bottom-0 z-[500] w-screen h-[80px] bg-black"></div>
      //   <div onClick={backToMain} className="cursor-pointer ml-4 p-2">
      //     🔙
      //   </div>
      //   <div className="bg-black">
      //     <iframe
      //       className="w-[100%] aspect-video "
      //       src={`https://www.youtube.com/embed/${
      //         trailerVideo?.key
      //       }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${
      //         isMute && '&mute=1'
      //       }`}
      //       // src={`https://www.youtube.com/embed/${
      //       //   trailerVideo?.key
      //       // }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${
      //       //   isMute && '&mute=1'
      //       // }`}
      //       title="YouTube video player"
      //       // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //     ></iframe>
      //   </div>
      // </div>
    )
  );
};

export default Movie;
