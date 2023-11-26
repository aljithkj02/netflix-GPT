import React from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_URL } from "../utils/constants";

export const TrailerBox = () => {
  const trailer = useSelector(store => store.movies?.trailer);
  
  return (
    <div className="relative">
      {/* <div class="absolute inset-0 bg-black z-10"></div> */}
      <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-10"></div>
      <iframe
        className="w-full aspect-video"
        src={`${YOUTUBE_URL}${trailer.key}?si=MgnBBfPbHbI0jgLx&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
