import React, { useContext } from 'react';
import { VideoContext } from '../../conexts/video-state.context';
import "./banner.css";

export const Banner = ({details}) =>{
    const videoState = useContext(VideoContext);
    const handleToggleClick = () =>{
        videoState.setIsClicked(!videoState.isClicked)
    };
    return(
        <div>
            <div className={videoState.isClicked? 'banner-overlay' : ''}>
                <img src={`./assets/${details.poster}`} alt='baner' width='100%'/>
                <img className='play' onClick={handleToggleClick}  src='./assets/play-icon.png' alt='play' width='90px'/>
                <div className='details'>
                    <h1>{details.title}</h1>
                    <p>{details.overview}</p>
                    <span>{details.releseDate}</span>
                    <span>{details.runTime} </span>
                    <h1>{details.rating}</h1>
                </div>
            </div>
            {videoState.isClicked && 
                <div className='popup-container'>
                    <button onClick={handleToggleClick} className='close' >Close</button>
                    <iframe className='popup' title='movie trailer' width="1000" height="450px" 
                    src={`https://www.youtube.com/embed/${details.key}`}
                    frameBorder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                </div>}
        </div>
    );
}