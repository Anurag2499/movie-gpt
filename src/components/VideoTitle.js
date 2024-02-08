import React from 'react';
import { useDispatch } from 'react-redux';
import { changeShowInfo } from '../utils/configSlice';
import { setPlay } from '../utils/moviesSlice';

const VideoTitle = ({ movieId, title, overview, isMute, setIsMute }) => {
  const dispatch = useDispatch();
  const onPlay = () => {
    dispatch(setPlay(movieId));
  };
  const handleCardClick = () => {
    dispatch(
      changeShowInfo({
        show: true,
        movieId: movieId,
        movieDetails: {},
        movieKeywords: [],
        movieCredits: [],
      })
    );
  };
  // console.log(movieId);
  return (
    <div className="w-screen aspect-video pt-[15%] px-8 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-lg md:text-5xl w-1/3 ">{title}</h1>
      <p className="hidden md:inline-block text-lg py-8 w-[40%] ">{overview}</p>
      <div className="flex justify-between">
        <div>
          <button
            className="bg-white text-black p-1 m-1 md:p-2 md:m-2 text-sm md:text-lg w-16 md:w-28 rounded-md hover:opacity-80 "
            onClick={onPlay}
          >
            ▷ Play
          </button>
          <button
            onClick={handleCardClick}
            className="text-white bg-gray-500 p-1 m-1 md:p-2 md:m-2 text-sm md:text-lg w-12 md:w-28 rounded-md  bg-opacity-50 hover:opacity-40 hidden md:inline-block"
          >
            More Info
          </button>
        </div>
        <div className="flex p-2 md:p-4">
          <div
            className="px-2 py-2 text-white border border-white rounded-full cursor-pointer hover:bg-opacity-10 hover:bg-white md:p-2"
            onClick={() => setIsMute(!isMute)}
          >
            {isMute ? '🔇' : '🔉'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
