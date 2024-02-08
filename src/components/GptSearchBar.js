import React, { useRef } from 'react';
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langId = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // console.log(langId);

  // Movies name and Search in TMDB.
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      'Act as a movie recommended system and suggest some movies for the query' +
      searchText.current.value +
      '. Only give me names of 8 movies, commas seperated like the example result given ahead. Example Result: gadar,sholay,don,koi mil gaya, krish.';

    // Make API call to gpt api and call movie result
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    // Hera Pheri, Golmaal: Fun Unlimited, Andaz Apna Apna, Chupke Chupke, Padosan
    const gptMovies = gptResults.choices[0].message.content.split(',');
    console.log(gptMovies);

    // For each movie I will search TMDB api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [promise,promise,promise,promise,promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ moviesName: gptMovies, moviesResult: tmdbResults })
    );
  };

  return (
    <div className="md:pt-[10%]  pt-[40%] flex justify-center">
      {/* <div className="h-[90%]"> */}
      <form
        className="w-full md:w-1/2 bg-black  grid grid-cols-12 rounded-md"
        // className="pt-[15%] w-full md:w-1/2 grid grid-cols-12 gap-4 p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langId].gptSearchPlaceholder}
          className=" p-4 m-4 col-span-9"
        />
        <button
          className="p-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langId].search}
        </button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default GptSearchBar;
