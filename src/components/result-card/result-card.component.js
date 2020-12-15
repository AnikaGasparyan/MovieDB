import React from "react";
import "./result-card.component.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, category }) => {
  let posterUrl = "default.image";
  if (movie.poster_path || movie.profile_path) {
    posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path}`;
  }

  return (
    <Link to={`/details/${category}/${movie.id}`} className="wrapper">
      <div className="movie-card" key={movie.id}>
        <img src={posterUrl} alt="movie" width="100px" />
        <div className="title">
          <h2>{movie.title || movie.name}</h2>
          <p>
            {movie.known_for_department || dayjs(`${movie.release_date || movie.first_air_date}`).format("MMM D, YYYY")}
          </p>
        </div>
        <p className="overview">
          {movie.overview || `Popularity ${movie.popularity < 10 ? Math.floor(movie.popularity) : 10} /10`}
        </p>
      </div>
    </Link>
  );
};
