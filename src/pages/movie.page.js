import React, { useContext } from 'react';
import "./page.css";
import { useTrending } from "../hooks/use-trending";
import { Card } from "../components/movie/card.component";
import { Banner } from "../components/banner/banner.component";
import { VideoContext } from "../conexts/video-state.context";
import { LoadingScreen } from '../components/loader/loader.component';
import { useDetails } from '../hooks/use-details.hook';
import {useVideoKey} from '../hooks/use-video-key.hook'

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