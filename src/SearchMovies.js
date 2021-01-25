// TODO: If user searches nothing, I want the same page to display
// TODO: Filter to show movies above a certain rating

import React, { Component, useState } from "react";
import MovieCard from "./movieCard";

export default function SearchMovies() {
  // States: input query, movies
  const [query, setQuery] = useState("");
  // create a state for movies and update that state when needed
  const [movies, setMovies] = useState([]);

  // Make request to movies API
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6d6d6b05bbd28dae11fcb094da4bf398&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      // returns a promise. Uses async awaits.
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  function getMovies() {
    if (movies) {
      return movies
        .filter((movie) => movie.poster_path)
        .map((movie) => <MovieCard movie={movie} key={movie.id} />);
    } else {
      return;
    }
  }
  return (
    <>
      {/* The visual part of the website */}
      {/* Search bar */}
      <form className="form" onSubmit={searchMovies}>
        {/* Search bar label */}
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Spiderman"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {/* Search button */}
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {/* Movie cards that get displayed */}
      <div className="card-list">
        {/* filters to only show movies with an image */}
        {/* takes an element from the array and plugs it into the MovieCard template. It will do this for the whole array, which is why we can see every Jurassic World movie. */}
        {getMovies()}
      </div>
    </>
  );
}
