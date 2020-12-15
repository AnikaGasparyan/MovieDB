import { movieService } from "../services/movie.service";
import { useEffect, useState } from "react";

export const useSearchResults = (query, value, page) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query === "" && value === "") {
      return;
    }
    movieService
      .getSearchResults(query, value, page)
      .then(data => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch(e => {
        setMovies([]);
        setIsLoading(true);
      });
    return () => {
      setMovies([]);
    };
  }, [query, value, page]);

  return [movies, isLoading];
};
