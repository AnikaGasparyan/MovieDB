import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useRecommendations = (url) => {
    const [recomList, setRecomList] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        movieService.getRecommendations(url).then((data)=>{
            setRecomList(data);
            setIsLoading(false)

        }).catch((e)=>{
            setRecomList({});
            setIsLoading(true)

        })
    },[url]);

    return {
        recomList,
        isLoading
    };
}
