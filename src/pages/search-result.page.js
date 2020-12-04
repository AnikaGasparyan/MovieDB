import React, { useContext } from 'react';
import './page.css'
import { QueryContext } from '../conexts/query.context';
import { MovieCard } from '../components/result-card/result-card.component';
import { useSearchResults } from '../hooks/use-search-results.hook';
import { LoadingScreen } from "../components/loader/loader.component";

export const SearchResult = () => {
    const query = useContext(QueryContext);
    const [movies, resultsLoading] = useSearchResults(query.query, query.value, query.page);

    const handleNextPageClick = () => {
        query.page < movies.total_pages && query.setPage(query.page+1);
    }

    const handlePrevPageClick = () => {
        query.page !==1 && query.setPage(query.page -1)
    }
     
    return (
        <>
            {resultsLoading? (<LoadingScreen />) : (
                <div className='search-results-container'>
                    <div className='error-msg'>
                        {(!movies.results|| movies.results.length === 0) && <h1> Oops, couldn't find that, try something else</h1>}
                    </div>
                        {movies.results && movies.results.map((movie)=>{
                            console.log(movies)
                        return <MovieCard movie={movie} key={movie.id}/>}
                    )}
                    <div className='btn-group'>
                        <button className='btn'  onClick={handlePrevPageClick}> Previous Page </button>
                        <button  className='btn' onClick={handleNextPageClick}>Next Page</button>
                    </div>
                </div>

            )}
        </>
       
    );
}