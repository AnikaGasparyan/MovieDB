import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useRecommendations = (url) => {
    const [recomList, setRecomList] = useState([]);
    
    useEffect(()=>{
        movieService.getRecommendations(url).then((data)=>{
            setRecomList(data);

        }).catch((e)=>{
            setRecomList([]);

        })
      
    },[url]);
    return recomList;
}