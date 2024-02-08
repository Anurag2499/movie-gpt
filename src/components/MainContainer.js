import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const [isMute, setIsMute] = useState(true);

  if (!movies) return;

  const mainMovie = movies[Math.floor(Math.random() * 20)];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle
        movieId={id}
        title={original_title}
        isMute={isMute}
        setIsMute={setIsMute}
        overview={overview}
      />
      <VideoBackground movieId={id} isMute={isMute} setIsMute={setIsMute} />
    </div>
  );
};

export default MainContainer;
