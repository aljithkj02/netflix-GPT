import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        movies: null,
        movieNames: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.movieNames = action.payload.movieNames;
            state.movies = action.payload.movies
        }
    }
})

export default gptSlice.reducer;
export const { addMovies } = gptSlice.actions;