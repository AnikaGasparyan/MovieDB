import { movieService } from "../services/movie.service";
import {useEffect, useState, useContext} from 'react';
import { QueryContext } from '../conexts/query.context';


export const useSearchResults = (query, value, page)=>{
    const [movies,setMovies] = useState([]);
    const error = useContext(QueryContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if(query === '' && value=== ''){
            return
        }
        movieService.getSearchResults(query, value, page).then((data)=>{
            setMovies(data);
            setIsLoading(false);

        }).catch((e)=>{
            setMovies([]);
            setIsLoading(true);

        })
        return  ()=> {
            setMovies([]);
        }
    },[query, value, error, page]);
    return [movies, isLoading];
}