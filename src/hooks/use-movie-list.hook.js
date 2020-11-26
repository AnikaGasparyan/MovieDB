import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useMoviesList = (type) => {
    const [moviesList, setMoviesList] = useState([]);
    useEffect(()=>{
        movieService.getSectionMovieList(type).then((data)=>{
            setMoviesList(data);
        }).catch((e)=>{
            setMoviesList([]);
        })
        return ()=>{
            setMoviesList([]);
        }
    },[type]);
    return moviesList;
}