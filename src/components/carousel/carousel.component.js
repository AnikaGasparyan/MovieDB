import React from 'react';
import './carousel.component.css';
import { Card } from "../movie/card.component";


export const Carousel = ({items}) => {
    const width = "150px"
    return(
    
        <div className='carousel'>  
        {items.results && items.results.map((item)=>{
            return  <Card item={item} key={item.id} width={width}/>                   
        })}
        
        </div>
    );
}