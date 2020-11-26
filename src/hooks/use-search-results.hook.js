import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useSearchResults = (query, value)=>{
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        if(query === '' && value=== ''){
            return
        }
        movieService.getMovieList(query, value).then((data)=>{
            setMovies(data);
        }).catch((e)=>{
            setMovies([]);
        })
        return  ()=> {
            setMovies([]);
        }
    },[query, value]);
    return movies;
}