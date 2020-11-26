import React, { useContext } from 'react';
import { QueryContext } from '../conexts/query.context';
import { MovieCard } from '../components/result-card/result-card.component';
import { useSearchResults } from '../hooks/use-search-results.hook';

export const SearchResult = () => {
    const query = useContext(QueryContext);
    const movies = useSearchResults(query.query, query.value);
    return (
        <div className='search-results-container'>
        {movies.results !==undefined && movies.results.map(
            (movie)=>{
                console.log(movie)
                return <MovieCard movie={movie} key={movie.id}/>
            }
            )}
        
        </div>
    );
}