import React, { Component } from "react";

export default function MovieCard({ movie }) {
  //               const movie = props.movie
  // destrucuting: const {movie} = props;
  return (
    <React.Fragment>
      <div className="card">
        <div className="imageDiv">
          <img
            className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + " poster"}
          />
        </div>
        <div className="card--content">
          <h3 className="card--title">{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p className="card--desc">{movie.overview}</p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}
