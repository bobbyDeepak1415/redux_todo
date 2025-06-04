import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "./MoviesSlice";

export default function MoviesList() {
  const movies = useSelector((state) => state.moviesList.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Movies List</h2>
      {movies.map((movie) => {
        return <div key={movie.id}>{movie.name}</div>;
      })}
    </div>
  );
}
