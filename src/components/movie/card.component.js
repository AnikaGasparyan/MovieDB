import React from 'react';
import './card.component.css';
import dayjs from "dayjs";

export const Card = ({item, width}) => {
    const knownFor = item.known_for && item.known_for.map((movie)=>{
        return movie.title 
    })
    return(
        <div className='card' key={item.id}>          
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path}`} alt='card-img' width={width}/>
            <div className='card-info'>
                <b> {item.title || item.name} </b>
                <br />
                <div className='main-info'> {knownFor? knownFor+' ': item.vote_average +'/10'} </div>
                <br />
                { item.known_for_department || dayjs(`${item.release_date || item.first_air_date}`).format('MMM D, YYYY') }
            </div>
        </div>
    );
}