import { movieService } from "../services/movie.service";
import {useEffect, useState} from 'react';

export const useDetails = (id, mediaType) => {
    const [details,setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(()=>{
        movieService.getDetails(id, mediaType).then((data)=>{
            setDetails(data);
            setIsLoading(false);
            setIsLoaded(true);
        }).catch((e)=>{
            setDetails({});
            setIsLoading(true);
            setIsLoaded(false);
        });

    }, [id, mediaType]);

     return [details, isLoading, isLoaded]

}
