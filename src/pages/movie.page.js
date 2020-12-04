import React, { useContext } from 'react';
import "./page.css";
import { useTrending } from "../hooks/use-trending";
import { Card } from "../components/movie/card.component";
import { Banner } from "../components/banner/banner.component";
import { VideoContext } from "../conexts/video-state.context";
import { LoadingScreen } from '../components/loader/loader.component';

export const Movies = () => {
    const videoState = useContext(VideoContext);
    const mediaType = 'movie'
    const [trending, trendingLoading] = useTrending(mediaType);

    const details = {
        title: 'The Avengers',
        key: 'bGt-saFvkNk',
        overview: `When an unexpected enemy emerges and threatens global safety and security, 
        Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D.,
        finds himself in need of a team to pull the world back from the brink of disaster.
        Spanning the globe, a daring recruitment effort begins!`,
        releseDate: 'Relese date: 25 April, 2012',
        runTime: 'Runtime: 2h 40m',
        rating: 'Rating: 7.7/10',
        poster: 'avengers-movie-banner.jpg'
    }
    const width = '200px';
    return (
        <>
            {trendingLoading ? <LoadingScreen /> :
                <div >
                    <Banner details={details} />

                    <div className={videoState.isClicked ? 'page-overlay' : ''}>

                        <h1> Welcome to this week's trending movies page</h1>
                        <div className='trending-items'>
                            {trending.results && trending.results.map((item) => {
                                return <Card item={item} key={item.id} width={width} />
                            })}
                        </div>
                    </div>
                </div>
            }
        </>

    );
}