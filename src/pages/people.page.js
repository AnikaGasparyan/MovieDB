import React from 'react';
import "./page.css";

import { useTrending } from "../hooks/use-trending";
import { PersonCard } from "../components/cards/PersonCardComponent";
import { LoadingScreen } from '../components/loader/loader.component';

export const People = () => {
    const mediaType = 'person'
    const {trendingList: trending, isLoading: loadingTrending} = useTrending(mediaType);
    const width = '200px'

    return(
        <>
            {loadingTrending? <LoadingScreen /> : 
        
            <div className='people-page'>
                <h1> Welcome to this week's trending people page</h1>
                    <div className='trending-items'>
                        {trending.results && trending.results.map((item)=>{
                            return  <PersonCard item={item} key={item.id} width={width} mediaType={mediaType}/>                   
                        })}
                    </div> 
            </div>
        }
        </>
    );
}