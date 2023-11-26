import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../components/Header';
import { TrailerBox } from '../components/TrailerBox';
import { MoviesList } from '../components/MoviesList';
import { TrailerInfo } from '../components/TrailerInfo';
import { useMovies } from '../hooks/useMovies';

const Browse = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies, movieIndex } = useSelector(data => data.movies);
  useMovies();

  if(!nowPlayingMovies) return;
  const { original_title, overview, backdrop_path } = nowPlayingMovies[movieIndex];
  
  return (
    <div>
      <div className='absolute z-20 '> 
        <Header />
        <TrailerInfo original_title={original_title} overview={overview} backdrop_path={backdrop_path} />
      </div>
      <TrailerBox />
      <div className='bg-black pb-20'>
        <div className='mt-[-170px] z-20 relative w-[90%] mx-auto flex flex-col gap-10'>
          <MoviesList title="Now Playing" movies={nowPlayingMovies} />
          <MoviesList title="Popular" movies={popularMovies} />
          <MoviesList title="Top Rated" movies={topRatedMovies} />
          <MoviesList title="Upcoming" movies={upComingMovies} />
        </div>
      </div>
    </div>
  )
}

export default Browse