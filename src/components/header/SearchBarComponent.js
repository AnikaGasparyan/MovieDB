import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./header.component.css";
import qs from "query-string";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const location = useLocation();
  const history = useHistory();

  const [error, setError] = useState("");

  const handleSearchTextChange = event => {
    setQuery(event.target.value);
    setError("");
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
    setError("");
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      setError("Search query is required");
      return;
    }
    if (!category) {
      setError("Search category is required");
      return;
    }

    const queryString = qs.stringify({
      query,
      value: category,
      page: 1,
    });

    history.push(`/search-result?${queryString}`);
  };

  useEffect(() => {
    const { query, value } = qs.parse(location.search);
    setQuery(query);
    setCategory(value);
  }, [location.search]);

  return (
    <>
       <form onSubmit={handleSubmit}>
        <div className="input-dropdown">
          <select className="select" value={category} onChange={handleCategoryChange}>
            <option value="">Category</option>
            <option value={"movie"}>Movie</option>
            <option value={"tv"}>TV Show</option>
            <option value={"person"}>People</option>
          </select>
          <input className="search" placeholder="Search..." value={query} onChange={handleSearchTextChange} />
        </div>
        <div>{error && <div className="error">{error}</div>}</div>
      </form>
    </>
  );
};
