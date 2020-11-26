import React from 'react';
import './carousel.component.css';
import { Movie } from "../movie/movie.component";

export const Carousel = ({sectionMovies}) => {
    return(
        <div className='carousel'>   
        {sectionMovies.results!==undefined && sectionMovies.results.map((movie)=>{
            console.log(movie)
            return  <Movie movie={movie} key={movie.id}/>                   
        })}
        </div>
    );
}