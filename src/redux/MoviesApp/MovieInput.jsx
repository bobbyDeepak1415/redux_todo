import React, { useState } from "react";

import { addMovie } from "./MoviesSlice";
import { useDispatch } from "react-redux";

export function MovieInput() {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (!newMovie.trim()) return;
    dispatch(addMovie(newMovie));
    setNewMovie("");
  };

  return (
    <div>
      <input
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      ></input>
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}
