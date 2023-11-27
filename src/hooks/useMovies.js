import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getTrailer } from "../utils/apis/movies";
import { addMovieIndex, addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailer, addUpComingMovies } from "../redux/movieSlice";
import { getIndexBW } from "../utils";

export const useMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    useEffect(() => { 
        if(!nowPlayingMovies){
            fetchNowPlayingMovies();
            fetchPopularMovies();
            fetchTopRatedMovies();
            fetchUpComingMovies();
        }
    }, [])

    const fetchNowPlayingMovies = async () => {
        const response = await getMovies("now_playing");
        const index = getIndexBW(0, response?.length);
        dispatch(addMovieIndex(index));
        const movieId = response[index]?.id;
        const trailer = await getTrailer(movieId);
        dispatch(addNowPlayingMovies(response));
        if(trailer){
            dispatch(addTrailer(trailer));
        }
    }

    const fetchPopularMovies = async () => {
        const response = await getMovies("popular");
        dispatch(addPopularMovies(response));
    }

    const fetchTopRatedMovies = async () => {
        const response = await getMovies("top_rated");
        dispatch(addTopRatedMovies(response));
    }

    const fetchUpComingMovies = async () => {
        const response = await getMovies("upcoming");
        dispatch(addUpComingMovies(response));
    }
}