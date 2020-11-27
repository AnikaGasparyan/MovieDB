import React, { useState } from 'react';
import './section.component.css'
import { Carousel } from '../carousel/carousel.component';
import { useMoviesList } from '../../hooks/use-movie-list.hook';

export const Section = ({movieUrl,tvUrl,title}) => {
    const movies = useMoviesList(movieUrl);
    const shows = useMoviesList(tvUrl);

    const [isMovieActive, setIsMovieActive] = useState(true);

    const handleTvTabClick = () => {
        setIsMovieActive(false);
    }
    const handleMovieTabClick = () => {
        setIsMovieActive(true);
    }
    return(
        <div className='preview-section'>
            <div className='preview-text'>{title}</div>
            <div className='tabs'>
                <button className= {`tab tab-movie ${isMovieActive?'selected': ''} `} onClick={handleMovieTabClick}>Movies</button>
                <button  className={`tab ${!isMovieActive?'selected': ''} `} onClick={handleTvTabClick}>TV Shows</button>

            </div>
            <Carousel  items={isMovieActive ? movies : shows}/>
        </div>
    );
}