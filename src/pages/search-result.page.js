import React, { useContext } from 'react';
import './page.css'
import { QueryContext } from '../conexts/query.context';
import { MovieCard } from '../components/result-card/result-card.component';
import { useSearchResults } from '../hooks/use-search-results.hook';

export const SearchResult = () => {
    const query = useContext(QueryContext);
    const movies = useSearchResults(query.query, query.value);

    // useEffect (()=>{
    //     return function cleanup() {
    //         query.setQuery('')
    //     }
    // })
    
    return (
        <div className='search-results-container'>
            <div className='error-msg'>
                {(!movies.results|| movies.results.length === 0) && <h1> Oops, couldn't find that, try something else</h1>}
            </div>
                {movies.results && movies.results.map((movie)=>{
                return <MovieCard movie={movie} key={movie.id}/>
            }
            )}
        
        </div>
    );
}