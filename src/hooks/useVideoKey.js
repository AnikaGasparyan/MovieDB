import { movieService } from "../services/MovieService";
import {useEffect, useState} from 'react';

export const useVideoKey = (url) => {
    const [videoUrl, setVideoUrl] = useState('');
    useEffect(()=>{
        movieService.getVideoKey(url).then((data)=>{
            setVideoUrl(data);
        }).catch((e)=>{
            setVideoUrl('');
        })
        
    },[url]);
    return  videoUrl;
}