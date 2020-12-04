import React from 'react';
import "./page.css";

import { useTrending } from "../hooks/use-trending";
import { Card } from "../components/movie/card.component";
import { LoadingScreen } from '../components/loader/loader.component';

export const People = () => {
    const mediaType = 'person'
    const [trending, loadinTrending] = useTrending(mediaType);
    const width = '200px'

    return(
        <>
            {loadinTrending? <LoadingScreen /> : 
        
            <div className='people-page'>
                <h1> Welcome to this week's trending people page</h1>
                    <div className='trending-items'>
                        {trending.results && trending.results.map((item)=>{
                            return  <Card item={item} key={item.id} width={width}/>                   
                        })}
                    </div> 
            </div>
        }
        </>
    );
}