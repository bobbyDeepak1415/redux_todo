import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./MoviesApp/MoviesSlice";

export const store = configureStore({
  reducer: {
    moviesList:MoviesReducer
  },
});
...