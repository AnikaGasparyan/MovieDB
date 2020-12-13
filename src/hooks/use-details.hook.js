import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useDetails = (id, mediaType) => {
    const [details,setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        movieService.getDetails(id, mediaType).then((data)=>{
            setDetails(data);
            setIsLoading(false);
        }).catch((e)=>{
            setDetails([]);
            setIsLoading(true);
        })
        return ()=>{
            setDetails([]);
        }

    }, [id, mediaType]);
    
     return [details, isLoading]

}