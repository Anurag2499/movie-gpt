import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();
  // fetched the json from the TMDB api then using it by calling the useEffect hook and update appstore using dispatch
  const getUpcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      // 'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
