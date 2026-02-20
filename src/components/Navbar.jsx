import React from "react";

import { useSelector } from "react-redux";

export default function Navbar() {
  const movies = useSelector((state) => state.moviesList.value);
  return (
    <div>
      
     {movies.map((movie)=>{
      return <li>{movie.name}</li>
     })}   
           
    
    </div>
  )
}
