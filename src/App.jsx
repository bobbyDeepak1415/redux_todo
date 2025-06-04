import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoviesList from "./redux/MoviesApp/MoviesList";
import Navbar from "./components/Navbar";
import { MovieInput } from "./redux/MoviesApp/MovieInput";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <MovieInput />
      <MoviesList />
    </div>
  );
}

export default App;
