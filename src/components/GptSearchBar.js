import React, { useState } from 'react'
import { getRecommendedMovies } from '../utils/apis/openAi';
import { searchMovies } from '../utils/apis/movies';
import { addMovies } from '../redux/gptSlice';
import { useDispatch } from 'react-redux';

export const GptSearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!query) return;
    const movieNames = await getRecommendedMovies(query);
    const movies = await searchMovies(movieNames);
    if(movies) {
      dispatch(addMovies({
        movieNames,
        movies
      }));
    }
  }

  return (
    <div className='relative z-10'>
      <form onSubmit={handleSearch}>
        <div className='flex w-10/12 lg:w-5/12 mx-auto mt-20'>
            <input type='text' placeholder='What would you like to watch today?'  
              className='w-full p-3 lg:p-4 outline-none rounded-l-md lg:text-md'
              value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <button className='px-4 lg:px-12 text-white bg-[#E50914] lg:text-xl font-medium rounded-r-md'>
              Search
            </button>
        </div>
      </form>
    </div>
  )
}
