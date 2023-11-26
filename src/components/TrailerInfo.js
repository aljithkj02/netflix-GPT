import React from 'react'
import { Info, Play } from '../assets'

export const TrailerInfo = ({ original_title, overview, backdrop_path }) => {
  return (
    <div className='mt-56 ml-16'>
      {/* <img src={`${MOVIE_IMAGE_URL}${backdrop_path}`}  alt="movie"
        className='w-52'
      /> */}
      <h1 className='text-white font-bold text-4xl'>{ original_title }</h1>
      <p className='w-[27%] text-white my-5'>{ overview }</p>
      <div className='flex gap-3'>
        <button className='px-5 py-2 bg-white text-black font-semibold flex gap-2 items-center rounded-md hover:opacity-80 duration-200'>  
          <img src={Play} alt="play icon" 
            className='w-5'
          />
          Play
        </button>
        <button className='px-5 py-2 bg-opacity-80 bg-gray-400 text-white font-semibold flex gap-2 items-center rounded-md hover:bg-opacity-100 duration-200'>  
          <img src={Info} alt="play icon" 
            className='w-7'
          />
          More info
        </button>
      </div>
    </div>
  )
}
