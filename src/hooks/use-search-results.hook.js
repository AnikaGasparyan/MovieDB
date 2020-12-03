import { movieService } from "../services/movie.service";
import {useEffect, useState, useContext} from 'react';
import { QueryContext } from '../conexts/query.context';


export const useSearchResults = (query, value)=>{
    const [movies,setMovies] = useState([]);
    const error = useContext(QueryContext)
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
    },[query, value, error]);
    return movies;
}