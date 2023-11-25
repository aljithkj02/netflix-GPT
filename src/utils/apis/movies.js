import { API_OPTIONS } from "../constants";


export const getMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await response.json();
        return json.results;
    } catch (error) {
        console.log(error.message);
    }
}