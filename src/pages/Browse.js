import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../components/Header';
import { TrailerBox } from '../components/TrailerBox';
import { MoviesList } from '../components/MoviesList';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { TrailerInfo } from '../components/TrailerInfo';

const Browse = () => {
  const { nowPlayingMovies, movieIndex } = useSelector(data => data.movies);
  useNowPlayingMovies();

  if(!nowPlayingMovies) return;
  const { original_title, overview, backdrop_path } = nowPlayingMovies[movieIndex];
  
  return (
    <div>
      <div className='absolute z-20'> 
        <Header />
        <TrailerInfo original_title={original_title} overview={overview} backdrop_path={backdrop_path} />
      </div>
      <TrailerBox />
      <MoviesList />
    </div>
  )
}

export default Browse