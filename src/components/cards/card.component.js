import React from "react";
import "./card.component.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const Card = ({ item, width}) => {

    const {
      media_type,
      mediaType,
      id,
      poster_path,
      title,
      vote_average,
      release_date,
      first_air_date,
      name
    } = item;


  return (
    <Link to={`/details/${media_type || mediaType}/${id}`} className="card">
      <div>
        {item.media ? (
          <img src={`https://image.tmdb.org/t/p/w500${item.media.poster_path}`} alt="card-img" width="200px" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="card-img"
            width={width}
          />
        )}
        <div className="card-info">
          <b> {title || name} </b>
          <br />
          {item.media ? (
            <div className="main-info">{Math.floor(item.media.vote_average) + "/10"}</div>
          ) : (
            <div className="main-info">
              {Math.floor(vote_average) + "/10"}
            </div>
          )}
          <br />
          {item.media
            ? dayjs(item.media.release_date).format("MMM D, YYYY")
            : dayjs(`${release_date || first_air_date}`).format("MMM D, YYYY")}
        </div>
      </div>
    </Link>
  );
};
