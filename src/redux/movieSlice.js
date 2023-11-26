import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailer: null,
        movieIndex: 0
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state,action) => {
            state.upComingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
        addMovieIndex: (state, action) => {
            state.movieIndex  = action.payload;
        }
    }
})

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailer, addMovieIndex, addPopularMovies, addTopRatedMovies, addUpComingMovies } = movieSlice.actions;