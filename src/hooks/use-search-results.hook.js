import { movieService } from "../services/movie.service";
import { useEffect, useState } from "react";

export const useSearchResults = (query, value, page) => {

  const [initalQuery, setInitialQuery] = useState({
    movies: [],
    isLoading: true

  });

  useEffect(() => {
    if (query === "" && value === "") {
      return;
    };
    movieService.getSearchResults(query, value, page).then(data => {
       setInitialQuery({
         movies: data,
         isLoading: false
       });
      }).catch(e => {
        setInitialQuery({
          movies: [],
          isLoading: true
        })
      });
  }, [query, value, page]);

  return initalQuery;
};
