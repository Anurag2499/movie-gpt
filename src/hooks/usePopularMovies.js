import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const dispatch = useDispatch();
  // fetched the json from the TMDB api then using it by calling the useEffect hook and update appstore using dispatch
  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
