import React from 'react'
import { GptSearchBar } from '../components/GptSearchBar'
import { GptMovieSuggestions } from '../components/GptMovieSuggestions'
import { LOGIN_BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='pt-24'>
        <div className="absolute top-0 z-0 w-full">
        <img
            src={LOGIN_BG_URL}
            alt="Background img"
            className="h-screen w-full object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 h-screen bg-gradient-to-t from-black opacity-75 via-transparent to-black " />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch