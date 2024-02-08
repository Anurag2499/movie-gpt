import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import MovieDetail from './MovieDetail';
import Movie from './Movie';
import Footer from './Footer';
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showMovieDetails = useSelector((store) => store.config.showInfo);
  const playMovieId = useSelector((store) => store.movies.play);
  // console.log(showGptSearch);
  // a custom hook which on rendering fetch the data of movies list and add in the movie Store.
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return playMovieId ? (
    <Movie movieId={playMovieId} />
  ) : (
    <div>
      <Header />
      {showMovieDetails.show && <MovieDetail />}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Browse;
