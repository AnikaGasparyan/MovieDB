import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useVideoKey = (url) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        movieService.getVideoKey(url).then((data)=>{
            setVideoUrl(data);
            setIsLoading(false);
        }).catch((e)=>{
            setVideoUrl('');
            setIsLoading(true);
        })
        return ()=>{
           setVideoUrl('')
        }
    },[url]);
    return [videoUrl, isLoading];
}