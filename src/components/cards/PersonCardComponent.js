import React from "react";
import "./card.component.css";
import { Link } from "react-router-dom";

export const PersonCard = ({ item, width }) => {
    const {
        id,
        profile_path,
        name,
        known_for, 
        known_for_department
    } = item;
    
  const peopleKnownFor =
    known_for &&
    known_for.map(movie => {
      return movie.title;
    });

  return (
    <Link to={`/PersonDetailsPage/${id}`} className="card">
      <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt="card-img"
            width={width}
          />
        <div className="card-info">
          <b> {name} </b>
          <br />
         
            <div className="main-info">
              { peopleKnownFor + " " }
            </div>
          <br />
          {known_for_department}
        </div>
      </div>
    </Link>
  );
};
