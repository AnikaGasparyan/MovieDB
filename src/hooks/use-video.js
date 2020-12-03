import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useVideo = (id) => {
    const [videoUrl, setVideoUrl] = useState('');
    useEffect(()=>{
        movieService.getVideo(id).then((data)=>{
            setVideoUrl(data);
        }).catch((e)=>{
            setVideoUrl('');
        })
        return ()=>{
           setVideoUrl('')
        }
    },[id]);
    return videoUrl;
}