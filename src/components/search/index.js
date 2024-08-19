import React, { useRef } from 'react';
import './Search.css';
const Search = ({ onSearch }) => {
  const inputRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      onSearch(query);
      inputRef.current.value = ''; // Clear input
    }
  };

  return (
    <div className="weather-search">
      <form onSubmit={handleSubmit} className="weather-search-form">
        <input
          type="text"
          placeholder="Search characters"
          ref={inputRef}
          className="weather-search-input"
        />
        <button type="submit" className="weather-search-button">
          Search
        </button>
      </form>

    </div>
  );
};

export default Search;
