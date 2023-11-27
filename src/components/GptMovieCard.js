import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

export const GptMovieCard = ({ imgUrl, title }) => {
    return (
        <div className='cursor-pointer shadow-xl hover:scale-105 duration-200'>
          <img src={IMG_CDN_URL+imgUrl} alt={title} 
            className='w-full h-100 object-cover rounded-md'
          />
        </div>
      )
}
