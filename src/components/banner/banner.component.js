import React, { useContext } from 'react';
import { VideoContext } from '../../conexts/video-state.context';   
import "./banner.css";

export const Banner = ({details, videoId}) =>{
    const {
        poster_path,
        title,
        name,
        vote_average,
        overview
    } = details;
    const videoState = useContext(VideoContext);    
    const handleToggleClick = () =>{
        videoState.setIsClicked(!videoState.isClicked);
    };
    return(
        <div className='banner'>
            <div className={videoState.isClicked? 'banner-overlay' : ''}>
                <h1 className='play trailer'>Play trailer</h1>
                <div className='play play-circle'></div>
                <img className='play' src={`https://image.tmdb.org/t/p/w500/${poster_path}` } alt='baner'  onClick={handleToggleClick}/>
                <div className='details'>
                    <h1>{title || name}</h1>
                    <p>{overview}</p>
                </div>
                <div className='details rating'>
                    <h1>Rating</h1>
                   <h1>{Math.floor(vote_average)+'/10'}</h1>  
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