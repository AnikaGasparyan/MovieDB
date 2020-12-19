import React, { useMemo, useState } from 'react';
import './section.component.css'
import { Carousel } from '../carousel/carousel.component';
import { useMoviesList } from '../../hooks/use-movie-list.hook';
import { LoadingScreen } from '../loader/loader.component';

export const Section = ({movieUrl,tvUrl,title}) => {

    const {
        moviesList: {results: movies = []},
        isLoading: movieLoading} = useMoviesList(movieUrl);
    const {
        moviesList: {results :shows = []},
        isLoading: showsLoading} = useMoviesList(tvUrl);



    const [isMovieActive, setIsMovieActive] = useState(true);
    const [type, setType] = useState('movie');

    const handleTvTabClick = () => {
        setIsMovieActive(false);
        setType('tv');
    };
    const handleMovieTabClick = () => {
        setIsMovieActive(true);
        setType('movie')

    }



    const carouselData = useMemo(()=>{
        if(type==='movie'){
        return movies.map((movie)=> {
            return {
                ...movie,
                mediaType: type
            };
        });
    }
    return shows.map((show)=>{
        return {
            ...show,
            mediaType:type
        }
    })

}, [movies, shows, type]); 

    return(  
        <> 
            {movieLoading || showsLoading ? (<LoadingScreen />) 
                : <div className='preview-section'>
            <div className='preview-text'>{title}</div>
            <div className='tabs'>
                <button className={`tab tab-movie ${isMovieActive ? 'selected' : ''} `} onClick={handleMovieTabClick}>Movies</button>
                <button className={`tab ${!isMovieActive ? 'selected' : ''} `} onClick={handleTvTabClick}>TV Shows</button>

            </div>
            <Carousel items={carouselData} />
            </div>  }
        </>
          
    );
}