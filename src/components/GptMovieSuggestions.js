import React from 'react'
import { useSelector } from 'react-redux'
import { GptMovieCard } from './GptMovieCard';

export const GptMovieSuggestions = () => {
  const { movies, movieNames } = useSelector(store => store.gpt );

  if(!movieNames) return;
  
  return (
    <div className='relative z-10 mt-10 md:mt-28 p-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
        {
          movies.map((movie) => {
            const imgUrl = movie.poster_path || movie.backdrop_path;
            if(!imgUrl) return null;
            return <GptMovieCard key={movie.id} {...movie} imgUrl={imgUrl} />
          })
        }
      </div>
    </div>
  )
}
