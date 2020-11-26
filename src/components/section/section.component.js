import React from 'react';
import './section.component.css'
import { Carousel } from '../carousel/carousel.component';
import { useMoviesList } from '../../hooks/use-movie-list.hook';
export const Section = ({title, type}) => {
    const sectionMovies = useMoviesList(type);
    return(
        <div className='preview-section'>
            <div className='preview-text'>{title}</div>
            <Carousel sectionMovies={sectionMovies}/>
        </div>
    );
}