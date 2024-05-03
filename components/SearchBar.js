import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
  };

  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="AssetTracker Track your favourite crypto assets"
        value={query}
        onChange={handleInputChange}
        className="search-input" // Add class for custom styling
      />
      <InputRightElement>
        <Button onClick={handleSearch} colorScheme="blue">
          <FaSearch />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
