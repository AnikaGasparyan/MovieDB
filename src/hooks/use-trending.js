import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useTrending = (mediaType) => {
    const [trendingList, setTrendingList] = useState([]);
    useEffect(()=>{
        movieService.getTrendingList(mediaType).then((data)=>{
            setTrendingList(data);
        }).catch((e)=>{
            setTrendingList([]);
        })
        return ()=>{
            setTrendingList([]);
        }
    },[mediaType]);
    return trendingList;
}