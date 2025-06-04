import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  removeMovie } from "./MoviesSlice";

export default function MoviesList() {
  const movies = useSelector((state) => state.moviesList.value);
  const dispatch = useDispatch();

const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };



  return (
    <div>
      <h2>Movies List</h2>
      {movies.map((movie) => {
        return <div key={movie.id}>
            {movie.name}
            <button onClick={()=>handleRemoveMovie(movie.id)}>Remove</button>
            </div>;
      })}
    </div>
  );
}
