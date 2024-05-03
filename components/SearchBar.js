import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue); // Call onSearch prop with the search text
  };

  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="AssetTracker Track your favourite crypto assets"
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <InputRightElement>
        <Button colorScheme="blue">
          <FaSearch />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
