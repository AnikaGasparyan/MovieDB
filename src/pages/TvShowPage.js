import React from 'react';
import "./page.css";
import { useTrending } from "../hooks/useTrending";
import { Card } from "../components/cards/CardComponent";
import { Banner } from '../components/banner/BannerComponent';
import { LoadingScreen } from '../components/loader/LoaderComponent';
import { useDetails } from '../hooks/useDetails';
import {useVideoKey} from '../hooks/useVideoKey'

export const TvShows = () => {
    const mediaType = 'tv'

    const {trendingList: trending, isLoading: trendingLoading} = useTrending(mediaType);

    const {details} = useDetails('87739', mediaType);
    const url = `${mediaType}/87739`;
    const getKey = useVideoKey(url);
    const width = '200px';

    return (
        <>
            {trendingLoading ? <LoadingScreen /> :

                <div>
                    <Banner details={details} videoId={getKey} />
                    <div>
                        <h1> Welcome to this week's trending TV shows page </h1>
                        <div className='trending-items'>
                            {trending.results && trending.results.map((item) => {
                                return <Card item={item} key={item.id} width={width} mediaType={mediaType} />
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}