import React , {useContext, useState,useEffect} from 'react';
import { QueryContext } from '../../conexts/query.context';
import { useDebounce } from '../../hooks/use-debounce.hook';
import { Redirect } from "react-router-dom";
import './header.component.css';

export const SearchBar = () => {
    const [query,setQuery] = useState('');
    const search = useContext(QueryContext);
    const debouncedQuery = useDebounce(query, 500);
    const [shouldRedirect, setShouldRedirct] = useState(false);
    const [error, setError] = useState('')

    useEffect(()=>{
        search.setQuery(debouncedQuery);

        
    },[debouncedQuery, search]);


    const handleQueryChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        setShouldRedirct(false);
        setError('')
        if(search.value===''){
            setError('Select category!');
            setShouldRedirct(false);
        }
    };
    const handleValueChange = (event) => {
        setShouldRedirct(false);
        search.setValue(event.target.value);
        if(search.query.trim().length === 0){
            setError('Search query is requiered!');
            setShouldRedirct(false);
        }
        
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setShouldRedirct(true);
    };

    return(
        <>
            {shouldRedirect && <Redirect  to={`/search-result/?query=${query}`}/>}
            <form onSubmit={handleSubmit}>
                <div className='input-dropdown'> 
                    <select className='select' onChange={handleValueChange}>
                        <option value="">Category</option>
                        <option value={'movie'} >Movie</option>
                        <option value={'tv'} >TV Show</option>
                        <option value={'person'}>People</option>
                    </select>
                    <input className='search' placeholder="Search..." value={query} onChange={handleQueryChange}/>
                    
                </div>
                <div>
                    {error && <div className='error'>{error}</div>}
                </div>
            </form>
        </>
    );
}