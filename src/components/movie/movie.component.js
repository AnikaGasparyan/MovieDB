import React from 'react';
import './movie.component.css';
import dayjs from "dayjs";

export const Movie = ({item}) => {
    return(
        <div className='movie' key={item.id}>          
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt='movie' width='120px'/>
            <div className='movie-info'>
                <br/>
                <b>{item.title || item.name} </b>
                <br/>
                {dayjs(`${item.release_date || item.first_air_date}`).format('MMM D, YYYY')}
            </div>
        </div>
    );
}