import React, { useContext } from 'react';
import { VideoContext } from '../../conexts/video-state.context';   
import "./banner.css";

export const Banner = ({details, videoId}) =>{
    const videoState = useContext(VideoContext);    
    const handleToggleClick = () =>{
        videoState.setIsClicked(!videoState.isClicked);
    };
    console.log(details)
    return(
        <div className='banner'>
            <div className={videoState.isClicked? 'banner-overlay' : ''}>
                <img  className='play' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}` } alt='baner'  onClick={handleToggleClick}/>
                <div className='details'>
                    <h1>{details.title || details.name}</h1>
                    <p>{details.overview}</p>
                    <p> Hit the button on the right to play the trailer → </p>
                    <h1>{details.vote_average}/10</h1>
                </div>
            </div>
            {videoState.isClicked && 
                <div className='popup-container'>
                    <button onClick={handleToggleClick} className='close' >Close</button>
                    <iframe className='popup' title='movie trailer' width="1000" height="450px" 
                    src={`https://www.youtube.com/embed/${videoId[0].results[0] && videoId[0].results[0].key}`}
                    frameBorder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                </div>}
        </div>
    );
}