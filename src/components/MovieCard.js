import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { changeShowInfo } from '../utils/configSlice';

const MovieCard = ({ posterPath, movieId }) => {
  //   console.log(posterPath);
  const dispatch = useDispatch();

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

  if (!posterPath) return null;
  return (
    <div
      onClick={handleCardClick}
      className="w-28 md:w-40 pr-4 mr-2 cursor-pointer"
    >
      <img
        className="rounded-sm"
        alt="Moviecard"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
