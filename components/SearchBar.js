import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue);

    return (
      <div>
        <input type="text" value={query} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
};
export default SearchBar;
