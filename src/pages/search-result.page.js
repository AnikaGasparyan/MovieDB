import React from "react";
import "./page.css";
import { MovieCard } from "../components/result-card/result-card.component";
import { useSearchResults } from "../hooks/use-search-results.hook";
import { LoadingScreen } from "../components/loader/loader.component";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";

export const SearchResult = props => {
  const location = useLocation();
  const history = useHistory();

  const { query, value, page } = qs.parse(location.search);

  const {movies, resultsLoading} = useSearchResults(query, value, page);

  const navigateToPage = page => {
    const queryString = qs.stringify({
      query,
      value,
      page,
    });
    history.push(`/search-result?${queryString}`);
  };

  const handleNextPageClick = () => {
    const numPage = Number(page);
    if (numPage < movies.total_pages) {
      navigateToPage(numPage + 1);
    }
  };

  const handlePrevPageClick = () => {
    const numPage = Number(page);
    if (numPage !== 1) {
      navigateToPage(numPage - 1);
    }
  };

  return (
    <>
      {resultsLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="error-msg">
            {(!movies.results || movies.results.length === 0) && <h1> Oops, couldn't find that, try something else</h1>}
          </div>
          <div className="search-results-container">
            {movies.results &&
              movies.results.map(movie => {
                return <MovieCard movie={movie} key={movie.id} category={value} />;
              })}
            {movies.results && (
              <div className="btn-group">
                <button className="btn" onClick={handlePrevPageClick}>
                  {" "}
                  Previous Page{" "}
                </button>
                <button className="btn" onClick={handleNextPageClick}>
                  Next Page
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
