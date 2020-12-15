import React, { useContext } from "react";
import "./card.component.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const Card = ({ item, width }) => {
  const peopleKnownFor =
    item.known_for &&
    item.known_for.map(movie => {
      return movie.title;
    });

  return (
    <Link to={`/details/${item.mediaType}/${item.id}`} className="card">
      <div>
        {item.media ? (
          <img src={`https://image.tmdb.org/t/p/w500${item.media.poster_path}`} alt="card-img" width="200px" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path}`}
            alt="card-img"
            width={width}
          />
        )}
        <div className="card-info">
          <b> {item.title || item.name || item.media.title} </b>
          <br />
          {item.media ? (
            <div className="main-info">{Math.floor(item.media.vote_average) + "/10"}</div>
          ) : (
            <div className="main-info">
              {" "}
              {peopleKnownFor ? peopleKnownFor + " " : Math.floor(item.vote_average) + "/10"}{" "}
            </div>
          )}
          <br />
          {item.media
            ? dayjs(item.media.release_date).format("MMM D, YYYY")
            : item.known_for_department || dayjs(`${item.release_date || item.first_air_date}`).format("MMM D, YYYY")}
        </div>
      </div>
    </Link>
  );
};
