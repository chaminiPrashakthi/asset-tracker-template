import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

//seacth component

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    // Call onSearch prop with the search text
    onSearch(inputValue);
  };

  return (
    <InputGroup backgroundColor="black" width="40%">
      <Input
        type="text"
        placeholder="Track your favourite crypto assets "
        fontSize="1.2em"
        color="white"
        textAlign="center"
        value={query}
        borderColor="black"
        onChange={handleInputChange}
      />
      <InputRightElement color="gray.300" fontSize="2.2em">
        <SearchIcon color="white" boxSize={6} />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
