import React from "react";

import { useSelector } from "react-redux";

export default function Navbar() {
  const movies = useSelector((state) => state.moviesList.value);
  return (
    <div>
      <h1>
        Navbar here:
        {movies.length > 0 ? <li>{movies[1].name} </li> : <li>none</li>}
      </h1>
    </div>
  );
}
