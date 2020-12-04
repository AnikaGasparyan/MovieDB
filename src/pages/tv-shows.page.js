import React from 'react';
import "./page.css";
import { useTrending } from "../hooks/use-trending";
import { Card } from "../components/movie/card.component";
import { Banner } from '../components/banner/banner.component';
import { LoadingScreen } from '../components/loader/loader.component';

export const TvShows = () => {
    const mediaType = 'tv'
    const [trending, trendingLoading] = useTrending(mediaType);
    const details = {
        title: 'The Queen’s Gambit',
        key: 'FU854_5itOk',
        overview: `In a Kentucky orphanage in the 1950s, 
        a young girl discovers an astonishing talent for chess
         while struggling with addiction.`,
        releseDate: 'Relese date: 23 October, 2020',
        rating: 'Rating: 8.1/10',
        poster: 'queens-gambit-banner.jpg'
    }
    const width = '200px';

    return (
        <>
            {trendingLoading ? <LoadingScreen /> :

                <div>
                    <Banner details={details} />
                    <div>
                        <h1> Welcome to this week's trending TV shows page </h1>
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