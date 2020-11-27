import React from 'react';
import {Section} from '../components/section/section.component';

export const HomePage = () => {
    return(
        <>
            <img src='./assets/avengers-movie-banner.jpg' alt='bannaer' width='100%'/>
            <Section title="Now Playing"  movieUrl='/movie/now_playing' tvUrl="/tv/on_the_air"/> 
            <Section title="Popular"   movieUrl='/movie/popular' tvUrl="/tv/popular"/>
            <Section title="Upcoming" movieUrl='/movie/upcoming' tvUrl='/tv/airing_today'/>
        </>
    );
}