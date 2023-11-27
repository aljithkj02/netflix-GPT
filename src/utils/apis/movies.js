import { API_OPTIONS } from "../constants";


export const getMovies = async (movieType) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieType}`, API_OPTIONS);
        const json = await response.json();
        return json.results;
    } catch (error) {
        console.log(error.message);
    }
}

export const getTrailer = async (videoId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos`, API_OPTIONS);
        const json = await response.json();
        const trailer = json?.results.find((item) => ["Trailer", "Teaser"].includes(item.type));
        return trailer;
    } catch (error) {
        console.log(error.message);
    }
}

export const searchMovie = async (movieName) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&page=1`, API_OPTIONS);
        const json = await response.json();
        return json?.results;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

export const searchMovies = async (movieNames) => {
    try {
        const promiseArray = movieNames.map(async (name) => searchMovie(name));
        const moviesData = await Promise.all(promiseArray);
        let allMoviesData = [];
        for(let movie of moviesData) {
            allMoviesData = [...allMoviesData, ...movie];
        }
        return allMoviesData;
    } catch (error) {
        console.log(error.message)
    }
}