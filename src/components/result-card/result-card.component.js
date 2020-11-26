import React from 'react';
import './result-card.component.css'
import dayjs from "dayjs";

export const MovieCard = ({movie}) => {
    
    return(
        
        <div className='wrapper'>
            <div className='movie-card' key={movie.id}>
                <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path}`} 
                alt="movie" width='100px' 
                />
                <div className='title'>
                    <h3>{movie.title || movie.name}</h3>
                    <p>{movie.known_for_department || dayjs(`${movie.release_date || movie.first_air_date}`).format('MMM D, YYYY')}</p>
                </div>
                <p className='overview'>
                    {movie.overview ||`Popularity ${movie.popularity<10? Math.floor(movie.popularity) : 10} /10`}
                </p>
                
            </div>
        </div>
    )

}