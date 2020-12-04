import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useVideo = (id) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        movieService.getVideo(id).then((data)=>{
            setVideoUrl(data);
            setIsLoading(false);
        }).catch((e)=>{
            setVideoUrl('');
            setIsLoading(true);
        })
        return ()=>{
           setVideoUrl('')
        }
    },[id]);
    return [videoUrl, isLoading];
}