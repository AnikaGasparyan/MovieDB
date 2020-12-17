import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useDetails = (id, mediaType) => {

    const [initialState, setInitialState] = useState({
        details: [],
        isLoading: true
    });

    useEffect(()=>{
        movieService.getDetails(id, mediaType).then((data)=>{
            setInitialState({
                details: data, 
                isLoading: false
            });
        }).catch((e)=>{
            setInitialState({
                details: [], 
                isLoading: true
            });
        })

    }, [id, mediaType]);
    
     return initialState;
}