import React from 'react';
import './carousel.component.css';
import { Movie } from "../movie/movie.component";


export const Carousel = ({items}) => {
    return(
        <div className='carousel'>  
        {items.results && items.results.map((item)=>{
            console.log(item)
            return  <Movie item={item} key={item.id}/>                   
        })}
        
        </div>
    );
}