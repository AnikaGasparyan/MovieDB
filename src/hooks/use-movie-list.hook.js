import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useMoviesList = (url) => {
    const [moviesList, setMoviesList] = useState([]);
    useEffect(()=>{
        movieService.getSectionMovieList(url).then((data)=>{
            setMoviesList(data);
        }).catch((e)=>{
            setMoviesList([]);
        })
        return ()=>{
            setMoviesList([]);
        }
    },[url]);
    return moviesList;
}