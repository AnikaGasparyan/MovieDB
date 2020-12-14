import React, { useContext } from 'react';
import './page.css'
import { QueryContext } from '../conexts/query.context';
import { MovieCard } from '../components/result-card/result-card.component';
import { useSearchResults } from '../hooks/use-search-results.hook';
import { LoadingScreen } from "../components/loader/loader.component";

export const SearchResult = (props) => {
    

    const query = useContext(QueryContext);
    const searchQuery = query.query;
    props.location.search = searchQuery
    const [movies, resultsLoading] = useSearchResults(searchQuery, query.value, query.page);

    props.match.params = props.location.search;
    const handleNextPageClick = () => {
        query.page < movies.total_pages && query.setPage(query.page + 1);
    }

    const handlePrevPageClick = () => {
        query.page !== 1 && query.setPage(query.page - 1)
    }

    return (
        <>
            {resultsLoading ? (<LoadingScreen />) : (
                <>

                    <div className='error-msg'>
                        {(!movies.results || movies.results.length === 0) &&
                            <h1> Oops, couldn't find that, try something else</h1>}
                    </div>
                    <div className='search-results-container'>
                        {movies.results && movies.results.map((movie) => {
                            return <MovieCard movie={movie} key={movie.id} />
                        }
                        )}
                        {movies.results && <div className='btn-group'>
                            <button className='btn' onClick={handlePrevPageClick}> Previous Page </button>
                            <button className='btn' onClick={handleNextPageClick}>Next Page</button>
                        </div>}
                    </div>
                </>

            )}
        </>

    );
}