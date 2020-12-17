import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useTrending = (mediaType) => {

    const [initialTrendingList, setInitialTrendingList] = useState({
        trendingList: [],
        isLoading: true

    })

    useEffect(()=>{
        movieService.getTrendingList(mediaType).then((data)=>{
            setInitialTrendingList({
                trendingList: data,
                isLoading: false
            })
            
        }).catch((e)=>{
            setInitialTrendingList({
                trendingList: [],
                isLoading: true
            })
            
           
        })
    },[mediaType]);
    return initialTrendingList;
}