import React, { useState } from 'react';
import './section.component.css'
import { Carousel } from '../carousel/carousel.component';
import { useMoviesList } from '../../hooks/use-movie-list.hook';
import { LoadingScreen } from '../loader/loader.component';

export const Section = ({movieUrl,tvUrl,title}) => {
    const [movies,movieLoading] = useMoviesList(movieUrl);
    const [shows,showsLoading] = useMoviesList(tvUrl);
    const [isMovieActive, setIsMovieActive] = useState(true);
    const [type, setType] = useState('movie')

    const handleTvTabClick = () => {
        setIsMovieActive(false);
        setType('tv');
        
    }
    const handleMovieTabClick = () => {
        setIsMovieActive(true);
        setType('movie')
    }
    return(  
        <> 
            {movieLoading || showsLoading ? (<LoadingScreen />) 
                : <div className='preview-section'>
            <div className='preview-text'>{title}</div>
            <div className='tabs'>
                <button className={`tab tab-movie ${isMovieActive ? 'selected' : ''} `} onClick={handleMovieTabClick}>Movies</button>
                <button className={`tab ${!isMovieActive ? 'selected' : ''} `} onClick={handleTvTabClick}>TV Shows</button>

            </div>
            <Carousel items={isMovieActive ? movies : shows } mediaType={type}  />
            </div>  }
        </>
          
    );
}