import React from 'react';
import {Section} from '../components/section/section.component';

export const HomePage = () => {
    return(
        <>
            <img src='./assets/avengers-movie-banner.jpg' alt='bannaer' width='100%'/>
            <Section title="Now Playing" type='now_playing'/> 
            <Section title="Popular" type='popular' button=''/>
            <Section title="Upcoming" type='upcoming'/>
        </>
    );
}