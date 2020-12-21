import { movieService } from "../services/MovieService";
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

    const [initialState, setInitialState] = useState({
        details: initialDetails,
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
                details: initialDetails, 
                isLoading: true
            });
        })
        }, [id, mediaType, initialDetails]);

    
    return initialState
}


    
    
