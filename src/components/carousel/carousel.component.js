import React from 'react';
import './carousel.component.css';
import { Card } from "../movie/card.component";


export const Carousel = ({items, mediaType}) => {
    const width = "150px"

    
    return(
        <div className='carousel'>  
    
            {items && items.results && items.results.map((item)=>{
                return  <Card item={item} key={item.id} width={width} mediaType={mediaType}/>                   
            })} 
            
        </div>
            
    );
}