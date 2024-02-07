import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId, isMute, setIsMute }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        // src={`https://www.youtube.com/embed/${trailerVideo?.key}
        // ?&autoplay=true${isMute}&&mute=1`}
        src={`https://www.youtube.com/embed/${
          trailerVideo?.key
        }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${
          isMute && '&mute=1'
        }`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
