import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  //   console.log(posterPath);
  return (
    <div className="w-36 pr-4 mr-2">
      <img
        className="rounded-sm"
        alt="Moviecard"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
