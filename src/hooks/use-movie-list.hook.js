import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useMoviesList = (url) => {
    const [initialListState, setInitialListState] = useState({
        moviesList: [],
        isLoading: true
    })

    useEffect(()=>{
        movieService.getSectionMovieList(url).then((data)=>{
            setInitialListState({
                moviesList: data, 
                isLoading: false
            });
        }).catch((e)=>{
            setInitialListState({
                moviesList: [], 
                isLoading: true
            });
        })
    },[url]);

    return initialListState
    // return initialListState;
}