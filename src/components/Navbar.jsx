import React from "react";

import { useSelector } from "react-redux";

export default function Navbar(props) {
  const movies = useSelector((state) => state.moviesList.value);
  return (
    <div>
      <h1>Navbar here:{movies[1].name}</h1>
    </div>
  );
}
