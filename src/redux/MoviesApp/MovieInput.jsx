import React, { useState } from "react";

export function MovieInput(props) {

  const [newMovie,setNewMovie]=useState("")

const handleAddMovie=()=>{
if(!newMovie.trim()) return
}

  return(
    <div>


    <input onChange={(e)=>setNewMovie(e.target.value)}></input>
    <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  ) 
}
