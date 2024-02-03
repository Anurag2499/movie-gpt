import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl w-1/2 ">{title}</h1>
      <p className="text-lg py-8 w-1/4 ">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 m-2 text-lg w-28 rounded-md hover:opacity-80 ">
          ▷ Play
        </button>
        <button className="text-white bg-gray-500 p-2  m-2 text-lg w-28 rounded-md  bg-opacity-50 hover:opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
