import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../components/Header';
import { useGetNowPlayingMovies } from '../hooks/useGetNowPlayingMovies';
import { TrailerBox } from '../components/TrailerBox';
import { MoviesList } from '../components/MoviesList';

const Browse = () => {
  const movies = useSelector(data => data.movies?.nowPlayingMovies);
  useGetNowPlayingMovies();
  console.log({ movies })

  if(!movies) return;
  const { original_title, overview } = movies[0];
  
  return (
    <div>
      <Header />
      <div>
        <h1>{ original_title }</h1>
        <p>{ overview }</p>
        <button>Play</button>
        <button>More info</button>
      </div>
      <TrailerBox />
      <MoviesList />
    </div>
  )
}

export default Browse