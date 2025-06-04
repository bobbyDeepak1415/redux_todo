import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: "1", name: "Star Wars" },
    { id: "2", name: "Star Trek" },
  ],
};

export const MoviesSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.moviesList.push(action.payload);
    },
    removeMovie: (state, action) => {},
  },
});

export const { addMovie, removeMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
