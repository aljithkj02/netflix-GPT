import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getMovies, getTrailer } from "../utils/apis/movies";
import { addMovieIndex, addNowPlayingMovies, addTrailer } from "../redux/movieSlice";
import { getIndexBW } from "../utils";

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        const response = await getMovies();
        const index = getIndexBW(0, response?.length);
        dispatch(addMovieIndex(index));
        const movieId = response[index]?.id;
        const trailer = await getTrailer(movieId);
        dispatch(addNowPlayingMovies(response));
        if(trailer){
            dispatch(addTrailer(trailer));
        }
    }
}