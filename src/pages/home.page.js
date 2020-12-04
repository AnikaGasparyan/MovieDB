import React from 'react';
import {Section} from '../components/section/section.component';

export const HomePage = () => {
    return(
       
        <div>
            <img src='./assets/rick-and-morty-banner.png' alt='bannaer' width='100%'/>
            <Section title="Now Playing"  movieUrl='/movie/now_playing' tvUrl="/tv/on_the_air"/> 
            <Section title="Popular"   movieUrl='/movie/popular' tvUrl="/tv/popular"/>
            <Section title="Upcoming" movieUrl='/movie/upcoming' tvUrl='/tv/airing_today'/>
        </div>
                        
    );
}