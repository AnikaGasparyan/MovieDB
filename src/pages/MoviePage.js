import React, { useContext } from 'react';
import "./page.css";
import { useTrending } from "../hooks/useTrending";
import { Card } from "../components/cards/CardComponent";
import { Banner } from "../components/banner/BannerComponent";
import { VideoContext } from "../conexts/VideoStateContext";
import { LoadingScreen } from '../components/loader/LoaderComponent';
import { useDetails } from '../hooks/useDetails';
import {useVideoKey} from '../hooks/useVideoKey'

export const Movies = () => {
    const videoState = useContext(VideoContext);

    const mediaType = 'movie'
    const {trendingList: trending, isLoading: trendingLoading} = useTrending(mediaType);

    const {details} = useDetails('24428', mediaType);    
    const url = `${mediaType}/24428`;
    const getKey = useVideoKey(url);
    const width = '200px';
    return (
        <>
            {trendingLoading ? <LoadingScreen /> :
                <div >
                    <Banner details={details} videoId={getKey} />

                    <div className={videoState.isClicked ? 'page-overlay' : ''}>

                        <h1> Welcome to this week's trending movies page</h1>
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