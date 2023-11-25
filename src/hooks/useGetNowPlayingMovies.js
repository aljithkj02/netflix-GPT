import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getMovies } from "../utils/apis/movies";
import { addNowPlayingMovies } from "../redux/movieSlice";

export const useGetNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        const response = await getMovies();
        dispatch(addNowPlayingMovies(response));
    }
}