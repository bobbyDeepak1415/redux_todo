import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 1, name: "Star Wars" },
    { id: 2, name: "Star Trek" },
  ],
};

export const MoviesSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id:
          state.value.length > 0
            ? state.value[state.value.length - 1].id + 1
            : 1,
        name: action.payload,
      };
      state.value.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.value = state.value.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
