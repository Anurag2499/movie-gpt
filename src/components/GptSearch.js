import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      <div className="">
        <div className="fixed w-full h-full -z-20">
          <img
            className="brightness-50 bg-opacity-80 w-full h-screen object-cover fixed"
            src={BG_URL}
            alt=""
          />
        </div>
        <div className="">
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  );
};

export default GptSearch;
