import { movieService } from "../services/movie.service";
import {useEffect, useMemo, useState} from 'react';

export const useDetails = (id, mediaType) => {
    
    const initialDetails = useMemo(()=>{
        return {
            profile_path :'',
            biography :'',
            birthday: '',
            name: '',
            known_for_department: '',
            popularity: ''
        }
    },[]);
    const [details,setDetails] = useState(initialDetails);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        movieService.getDetails(id, mediaType).then((data)=>{
            setDetails(data);
            setIsLoading(false);
        }).catch((e)=>{
            setDetails(initialDetails);
            setIsLoading(true);
        });

    }, [id, mediaType, initialDetails]);

     return {details, isLoading}

}
