import React, { useContext, useState, useEffect } from 'react';
import { QueryContext } from '../../conexts/query.context';
import { useDebounce } from '../../hooks/use-debounce.hook';
import { Redirect } from "react-router-dom";
import './header.component.css';

export const SearchBar = () => {

    const [query, setQuery] = useState('');
    const search = useContext(QueryContext);

    const debouncedQuery = useDebounce(query, 500);
    const [shouldRedirect, setShouldRedirct] = useState(false);
    const [error, setError] = useState('');

    const searchQuery = {
        query: search.query,
        value: search.value,
        page: search.page,
    }

    const params = new URLSearchParams(searchQuery)
    const searchUrl = new URL('http://localhost:3000/search-result');
    const values = Array.from(params.values());
    const keys = Array.from(params.keys());

    for (let i = 0; i < keys.length; i++) {

        searchUrl.searchParams.set(keys[i], values[i]);
        console.log(searchUrl.toString());
    }
    const path = searchUrl.search.toString();
    const valueFromUrl = params.get('value');
    console.log(valueFromUrl)

    useEffect(() => {
        search.setQuery(debouncedQuery);

    }, [debouncedQuery, search,valueFromUrl]);

    const handleQueryChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        setShouldRedirct(false);
        setError('');
        if (search.value === '') {
            setError('Select category!');
            setShouldRedirct(false);
        }
    };
    const handleValueChange = (event) => {
        setShouldRedirct(false);
        search.setValue(event.target.value);
        if (search.query.trim().length === 0) {
            setError('Search query is requiered!');
            setShouldRedirct(false);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setShouldRedirct(true);
    };

    return (
        <>
            {shouldRedirect && <Redirect to={`/search-result${path}`} />}
            <form onSubmit={handleSubmit}>
                <div className='input-dropdown'>
                    <select className='select' onChange={handleValueChange}>
                        <option value="">Category</option>
                        <option value={'movie'} >Movie</option>
                        <option value={'tv'} >TV Show</option>
                        <option value={'person'}>People</option>
                    </select>
                    <input className='search' placeholder="Search..." value={query} onChange={handleQueryChange} />

                </div>
                <div>
                    {error && <div className='error'>{error}</div>}
                </div>
            </form>
        </>
    );
}