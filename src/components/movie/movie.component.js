import React from 'react';
import './movie.component.css';
import dayjs from "dayjs";

export const Movie = ({movie}) => {
    return(
        <div className='movie' key={movie.id}>          
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie' width='120px'/>
            <div className='movie-info'>
                <br/>
                <b>{movie.title} </b>
                <br/>
                {dayjs(`${movie.release_date }`).format('MMM D, YYYY')}
            </div>
        </div>
    );
}