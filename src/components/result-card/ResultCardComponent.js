import React from "react";
import "./result-card.component.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, category }) => {
  const {
    id,
    poster_path,
    profile_path,
    title,
    name,
    known_for_department,
    release_date,
    first_air_date,
    overview,
    popularity
  } = movie
  let posterUrl = "./assets/placeholder-movieimage.png";
  if (poster_path || profile_path) {
    posterUrl = `https://image.tmdb.org/t/p/w500${poster_path || profile_path}`;
  }

  return (
    <Link to={`/details/${category}/${id}`} className="wrapper">

      <div className="movie-card" key={id}>
        <img src={posterUrl} alt="movie" width="100px" />
        <div className="title">
          <h2>{title || name}</h2>
          <p>
            {known_for_department || dayjs(`${release_date || first_air_date}`).format("MMM D, YYYY")}
          </p>
        </div>
        <p className="overview">
          {overview || `Popularity ${popularity < 10 ? Math.floor(popularity) : 10} /10`}
        </p>
      </div>
    </Link>
  );
};
