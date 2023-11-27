import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

export const MovieCard = ({ title, poster_path}) => {
  return (
    <div className='min-w-[300px] cursor-pointer'>
        <div>
            <img src={`${IMG_CDN_URL}${poster_path}`} alt={title} 
                className='w-full h-48 object-cover'
            />
        </div>
    </div>
  )
}
