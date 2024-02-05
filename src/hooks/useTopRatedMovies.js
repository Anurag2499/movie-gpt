import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRelatedMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  // fetched the json from the TMDB api then using it by calling the useEffect hook and update appstore using dispatch
  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRelatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
