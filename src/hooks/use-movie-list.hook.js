import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useMoviesList = (url) => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        movieService.getSectionMovieList(url).then((data)=>{
            setMoviesList(data);
            setIsLoading(false)

        }).catch((e)=>{
            setMoviesList([]);
            setIsLoading(false)

        })
        return ()=>{
            setMoviesList([]);

        }
    },[url]);
    return[ moviesList, isLoading];
}