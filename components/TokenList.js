import { Flex, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import { formatMarketCapture } from "@/util/formatData";

import PriceChange from "./priceChange";
import SearchBar from "./SearchBar";

const TokenList = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredTokens, setFilteredTokens] = useState([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch("/api/topTokens");
        const data = await response.json();
        setTokens(data);
        setFilteredTokens(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top tokens:", error);
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  const handleSearch = (query) => {
    // Add a short delay before fetching data
    setTimeout(() => {
      const filtered = tokens.filter((token) =>
        token.symbol.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTokens(filtered);
    }, 500); // Adjust delay time as needed
  };

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading color="white">Asset Tracker</Heading>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Spinner size="xl" color="blue.500" />
      ) : (
        <Table variant="simple" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>24h %</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTokens.map((token, index) => (
              <Tr
                key={index}
                style={{
                  backgroundColor: "ash",
                  borderRadius: "8px",
                  padding: "8px",
                  marginBottom: "8px",
                }}
              >
                <Td>#{token.cmc_rank}</Td>
                <Td>
                  <img src={token.image}></img>
                  <Text ml={2}>{token.symbol}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {formatMarketCapture(token.quote.USD.market_cap)}
                  </Text>
                </Td>
                <Td>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(token.quote.USD.price)}
                </Td>
                <Td>
                  <PriceChange percentChange={token.quote.USD.percent_change_24h} />{" "}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Flex>
  );
};
export default TokenList;
