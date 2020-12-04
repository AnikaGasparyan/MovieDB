import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useTrending = (mediaType) => {
    const [trendingList, setTrendingList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        movieService.getTrendingList(mediaType).then((data)=>{
            setTrendingList(data);
            setIsLoading(false);
        }).catch((e)=>{
            setTrendingList([]);
            setIsLoading(true);
        })
        return ()=>{
            setTrendingList([]);
        }
    },[mediaType]);
    return [trendingList, isLoading];
}