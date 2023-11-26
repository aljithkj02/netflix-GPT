import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        movieIndex: 0
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
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
export const { addNowPlayingMovies, addTrailer, addMovieIndex } = movieSlice.actions;