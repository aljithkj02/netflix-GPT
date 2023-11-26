import { API_OPTIONS } from "../constants";


export const getMovies = async (movieType) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieType}?language=en-US&page=1`, API_OPTIONS);
        const json = await response.json();
        return json.results;
    } catch (error) {
        console.log(error.message);
    }
}

export const getTrailer = async (videoId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, API_OPTIONS);
        const json = await response.json();
        const trailer = json?.results.find((item) => ["Trailer", "Teaser"].includes(item.type));
        return trailer;
    } catch (error) {
        console.log(error.message);
    }
}