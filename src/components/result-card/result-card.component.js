import React, {useContext, useState} from 'react';
import { VideoContext } from '../../conexts/video-state.context';
import './result-card.component.css'
import dayjs from "dayjs";
import { QueryContext } from '../../conexts/query.context';
import { Redirect } from 'react-router-dom';


export const MovieCard = ({movie}) => {

    const card = useContext(VideoContext);
    const value = useContext(QueryContext);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const handleCardClick = () => {
        setShouldRedirect(true);
        card.setId(movie.id);
    };

    
    return(
        <> 
        
            {shouldRedirect && <Redirect to={`/details/${value.value}/${movie.id}`} />}
            
            <div className='wrapper' onClick={handleCardClick}>
                <div className='movie-card' key={movie.id}>
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path}`} 
                    alt="movie" width='100px' 
                    />
                    <div className='title'>
                        <h2>{movie.title || movie.name}</h2>
                        <p>{movie.known_for_department || dayjs(`${movie.release_date || movie.first_air_date}`).format('MMM D, YYYY')}</p>
                    </div>
                    <p className='overview'>
                        { movie.overview ||`Popularity ${movie.popularity<10? Math.floor(movie.popularity) : 10} /10`}
                    </p>
                    
                </div>
            </div>
        </>
    )

}