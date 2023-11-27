import React, { useRef, useState } from 'react'
import { MovieCard } from './MovieCard'
import { LeftArrow, RightArrow } from '../assets';

export const MoviesList = ({ title, movies }) => {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };
  
  return (
    <div>
      <h1 className=' text-2xl text-white'>{ title } </h1>
      <div className='flex items-center gap-2 mt-6 relative'>
        <button
          className='absolute left-0 top-0 bottom-0 px-4 py-2'
          onClick={() => handleScroll(-300)}
        >
          <img src={LeftArrow} alt="left arrow" />
        </button>

        <div
          ref={containerRef}
          className='flex gap-2 overflow-x-scroll scrollbar-hide'
          style={{ scrollLeft: scrollLeft, scrollBehavior: 'smooth' }}
        >
            { movies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />
            })}
        </div>

        <button
          className='absolute right-0 top-0 bottom-0 px-4 py-2'
          onClick={() => handleScroll(300)}
        >
        <img src={RightArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  )
}
